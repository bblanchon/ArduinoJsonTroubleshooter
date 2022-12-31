import path from 'node:path'
import { readdirSync, readFileSync } from 'node:fs'

import { dataToEsm, createFilter } from '@rollup/pluginutils'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import { Plugin, Logger, normalizePath, ViteDevServer } from 'vite'

interface UserOptions {
  folder?: string
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

interface PageError {
  page: string
  message: string
}

export default function TroubleshooterPlugin(userOptions: UserOptions = {}): Plugin {
  const folder = path.resolve(userOptions.folder || "src/pages")
  const filenamePattern = normalizePath(path.join(folder, "**/*.md"))
  const isPage = createFilter(filenamePattern)
  const virtualModuleId = 'virtual:troubleshooter'

  const mdi = MarkdownIt(userOptions.markdownItOptions || {})
  userOptions.markdownItUses?.forEach(
    ([plugin, options]) => mdi.use(plugin, options)
  )
  const pages: { [key: string]: Page } = {}

  let logger: Logger
  let isProduction = false

  function checkIntegrity() {
    const errors: PageError[] = []

    errors.push(
      ...Object.entries(pages).map(([key, page]) =>
        page.choices.filter(choice => choice.next && !(choice.next in pages))
          .map((choice) => ({
            page: key,
            message: `page \"${choice.next}\" is missing`
          }))
      ).flat()
    )

    const usedPages = new Set([
      "intro",
      "start",
      ...Object.values(pages)
        .map((page) => page.choices)
        .flat()
        .map((choice) => choice.next)
    ])
    errors.push(...Object.keys(pages)
      .filter((key) => !usedPages.has(key))
      .map((key) => ({
        page: key,
        message: "this page is unused"
      }))
    )

    const requiredFields = ["id", "label", "summary", "next"]
    errors.push(
      ...Object.entries(pages).map(([key, page]) =>
        page.choices.map((choice, index) =>
          requiredFields.filter(field => !choice[field])
            .map((field) => ({
              page: key,
              message: `choice ${index} lacks the \"${field}\" field`
            }))
        )
      ).flat(2)
    )

    const uniqueFields = ["id", "label", "summary"]
    errors.push(
      ...Object.entries(pages).map(([key, page]) =>
        uniqueFields.map((field) => {
          const values = page.choices.map((choice) => choice[field])
          const duplicates = values.filter(
            (val, idx) => values.indexOf(val) !== idx
          )
          return duplicates.map(
            (value) => ({
              page: key,
              message: `duplicate choice ${field} \"${value}\"`
            })
          )
        })
      ).flat(2)
    )

    errors.push(
      ...Object.entries(pages).map(([key, page]) =>
        page.choices
          .filter(choice => (/[^a-z0-9\-]/.test(choice.id)))
          .map((choice, index) => ({
            page: key,
            message: `invalid id \"${choice.id}\" for choice ${index}`
          }))
      ).flat()
    )

    errors.forEach(error => logger.error(`${error.page + '.md'}: ${error.message}`))
    if (isProduction && errors.length)
      throw new Error(JSON.stringify(errors, null, 2))
  }

  function getPageKey(filename: string) {
    return path.relative(folder, filename).slice(0, -3).replace(/\\/g, '/')
  }

  function loadPage(filename: string) {
    if (!isPage(filename)) return
    const key = getPageKey(filename)
    const { data: frontmatter, content } = matter(readFileSync(filename), { excerpt: false })
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
  }

  function removePage(filename) {
    if (!isPage(filename)) return
    const key = getPageKey(filename)
    delete pages[key]
  }

  function listFiles(folder: string) {
    const files: string[] = []
    readdirSync(folder, { withFileTypes: true }).forEach(
      (entry) => {
        const filename = path.join(folder, entry.name)
        if (entry.isDirectory())
          files.push(...listFiles(filename))
        else
          files.push(filename)
      }
    )
    return files
  }

  function reloadModule(server: ViteDevServer) {
    const { moduleGraph } = server
    const module = moduleGraph.getModuleById(virtualModuleId)
    if (module)
      server.reloadModule(module)
  }

  return {
    name: 'troubleshooter', // required, will show up in warnings and errors
    async configResolved(config) {
      logger = config.logger
      isProduction = config.isProduction
      listFiles(folder).forEach(f => loadPage(f))
    },
    configureServer(server) {
      server.watcher.on("change", (f) => {
        loadPage(f)
        checkIntegrity()
        reloadModule(server)
      })
      server.watcher.on("add", (f) => {
        loadPage(f)
        checkIntegrity()
        reloadModule(server)
      })
      server.watcher.on("unlink", (f) => {
        removePage(f)
        checkIntegrity()
        reloadModule(server)
      })
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return virtualModuleId
      }
    },
    load(id) {
      if (id === virtualModuleId) {
        checkIntegrity()
        return {
          code: dataToEsm(pages, { compact: true, namedExports: false, preferConst: true })
        }
      }
    },
  }
}