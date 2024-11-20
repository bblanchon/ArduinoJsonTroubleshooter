import path from "node:path"
import { readFileSync, readdirSync } from "node:fs"

import MarkdownIt from "markdown-it"
import type { Options, PluginWithOptions } from "markdown-it"
import matter from "gray-matter"
import { createFilter } from "@rollup/pluginutils"
import { normalizePath } from "vite"

export interface LoaderConfig {
  folder?: string
  markdownItOptions?: Options
  markdownItUses?: [PluginWithOptions, any][]
}

export interface PageFileOption {
  id: string
  label: string
  summary: string
  page: string
}

interface PageFrontmatter {
  options?: { [id: string]: PageFileOption }
  tags?: string[] | string
}

export interface PageFile {
  filename: string
  fullPath: string
  content: string
  options?: PageFileOption[]
  tags?: string[]
}

function listFiles(folder: string) {
  const files: string[] = []
  readdirSync(folder, { withFileTypes: true }).forEach((entry) => {
    const filename = path.join(folder, entry.name)
    if (entry.isDirectory()) files.push(...listFiles(filename))
    else files.push(filename)
  })
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
    config.markdownItUses?.forEach(([plugin, options]) =>
      this.mdi.use(plugin, options)
    )
  }

  resolve(folder: string, filename: string): string {
    if (filename.startsWith("/")) folder = this.folder
    return path.join(folder, filename)
  }

  normalizeFilename(filename: string) {
    return normalizePath(path.relative(this.folder, filename))
  }

  loadFile(filename: string): PageFile {
    filename = path.resolve(this.folder, filename)
    const {
      data: frontmatter,
      content
    }: { data: PageFrontmatter; content: string } = matter(
      readFileSync(filename),
      { excerpt: false }
    )
    const folder = path.dirname(filename)
    return {
      filename: this.normalizeFilename(filename),
      fullPath: filename,
      content: this.mdi.render(content),
      tags:
        typeof frontmatter.tags == "string"
          ? frontmatter.tags.split(/\s+/)
          : frontmatter.tags,
      options: frontmatter.options && Object.entries(frontmatter.options).map(([id, option]) => ({
        ...option,
        id,
        page: this.normalizeFilename(this.resolve(folder, option.page)),
        label: this.mdi.renderInline(option.label)
      }))
    }
  }

  listFiles() {
    // make sure /index.md is first
    return listFiles(this.folder).sort((a, b) => {
      a = a.replace(/\bindex.md$/, "")
      b = b.replace(/\bindex.md$/, "")
      return a.localeCompare(b)
    })
  }
}
