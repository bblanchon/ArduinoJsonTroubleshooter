import glob from 'glob'
import { dataToEsm } from '@rollup/pluginutils'
import type { Plugin, Logger } from 'vite'
import MarkdownIt from 'markdown-it'
import matter from 'gray-matter'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

interface UserOptions {
  markdownItOptions?: MarkdownIt.Options
  markdownItUses?: [MarkdownIt.PluginWithOptions, any][]
}

interface Choice {
  id: string
  label: string
  summary: string
  next: string
}

interface Page {
  content: string
  choices: Choice[]
}

export default function TroubleshooterPlugin(userOptions: UserOptions = {}): Plugin {
  const folder = "src/pages"
  const virtualModuleId = 'virtual:troubleshooter'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  const mdi = MarkdownIt(userOptions.markdownItOptions || {})
  userOptions.markdownItUses?.forEach(
    ([plugin, options]) => mdi.use(plugin, options)
  )
  const pages: { [key: string]: Page } = {}

  let logger: Logger

  async function loadPage(filename: string) {
    const key = filename.slice(0, -3)
    const { data: frontmatter, content } = matter(await readFile(join(folder, filename)), { excerpt: false })
    const page: Page = {
      ...frontmatter,
      choices: frontmatter.choices || [],
      content: mdi.render(content),
    }
    page.choices.forEach((choice: Choice) => {
      if (choice.label) choice.label = mdi.renderInline(choice.label)
      if (choice.summary) choice.summary = mdi.renderInline(choice.summary)
    })
    pages[key] = page
    logger.info(filename)
  }

  function checkIntegrity() {
    Object.entries(pages).forEach(([key, page]) => {
      page.choices.forEach((choice) => {
        if (choice.next && !(choice.next in pages))
          logger.warn(`Page \"${choice.next}\" is missing (referenced from \"${key}\")`)
      })
    })

    const usedPages = new Set([
      "intro",
      "start",
      ...Object.values(pages)
        .map((page) => page.choices)
        .flat()
        .map((choice) => choice.next)
    ])
    Object.keys(pages)
      .filter((key) => !usedPages.has(key))
      .forEach((key) => logger.warn(`Page \"${key}\" is unused`))

    const requiredFields = ["id", "label", "summary", "next"]
    Object.entries(pages).forEach(([key, page]) => {
      page.choices.forEach((choice, index) => {
        requiredFields.forEach((field) => {
          if (!choice[field])
            logger.warn(`Page \"${key}\": choice ${index} lacks the \"${field}\" field`)
        })
      })
    })

    const uniqueFields = ["id", "label", "summary"]
    Object.entries(pages).forEach(([key, page]) => {
      uniqueFields.forEach((field) => {
        const values = page.choices.map((choice) => choice[field])
        const duplicates = values.filter(
          (val, idx) => values.indexOf(val) !== idx
        )
        duplicates.forEach(
          (value) => logger.warn(`Page \"${key}\": duplicate choice ${field} \"${value}\"`)
        )
      })
    })

    Object.entries(pages).forEach(([key, page]) => {
      page.choices.forEach((choice, index) => {
        if (/[^a-z0-9\-]/.test(choice.id))
          logger.warn(`Page \"${key}\": invalid id \"${choice.id}\" for choice ${index}`)
      })
    })
  }

  return {
    name: 'troubleshooter', // required, will show up in warnings and errors
    async configResolved(config) {
      logger = config.logger
      const filenames = glob.sync("**/*.md", { cwd: folder }).forEach(loadPage)
      checkIntegrity()
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return {
          code: dataToEsm(pages, { compact: true, namedExports: false, preferConst: true })
        }
      }
    },
  }
}