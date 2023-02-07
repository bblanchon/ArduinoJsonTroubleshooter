import path from 'node:path'
import { readFileSync, readdirSync } from 'node:fs'

import MarkdownIt from 'markdown-it'
import matter from 'gray-matter'
import { createFilter } from '@rollup/pluginutils'
import { normalizePath } from 'vite'

import { Option, Page } from './pages'


export interface LoaderConfig {
  folder?: string
  markdownItOptions?: MarkdownIt.Options
  markdownItUses?: [MarkdownIt.PluginWithOptions, any][]
}

interface PageFrontmatter {
  options?: Option[]
  tags?: string[] | string
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

export class PageLoader {
  readonly folder: string
  readonly mdi: MarkdownIt
  readonly checkFilename: (filename: string) => boolean

  constructor(config: LoaderConfig) {
    this.folder = path.resolve(config.folder || "src/pages")

    const filenamePattern = normalizePath(path.join(this.folder, "**/*.md"))
    this.checkFilename = createFilter(filenamePattern)

    this.mdi = MarkdownIt(config.markdownItOptions || {})
    config.markdownItUses?.forEach(
      ([plugin, options]) => this.mdi.use(plugin, options)
    )
  }

  getFileKey(filename: string) {
    return ("/" + normalizePath(path
      .relative(this.folder, filename)))
      .replace(/.md$/, '')
      .replace(/\/index$/, '') || "/"
  }

  resolveNext(next: string, from: string) {
    from = normalizePath(path.relative(this.folder, from))
    return new URL(next, `foo://bar/${from}`).pathname
  }

  loadFile(filename: string): Page {
    const { data: frontmatter, content }
      : { data: PageFrontmatter, content: string }
      = matter(readFileSync(filename), { excerpt: false })
    return {
      content: this.mdi.render(content),
      tags: typeof frontmatter.tags == "string" ? frontmatter.tags.split(/\s+/) : frontmatter.tags,
      options: frontmatter.options?.map((option) => ({
        ...option,
        next: this.resolveNext(option.next, filename),
        label: this.mdi.renderInline(option.label),
      }))
    }
  }

  listFiles() {
    return listFiles(this.folder)
  }
}