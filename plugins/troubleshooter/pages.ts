import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

import MarkdownIt from "markdown-it"
import matter from 'gray-matter'

export interface Choice {
  id: string
  label: string
  summary: string
  next: string
}

export interface Page {
  content: string
  choices: Choice[]
}

export type PageMap = { [key: string]: Page }

export function loadPageFile(filename: string, mdi: MarkdownIt): Page {
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
  return page
}

export function listFiles(folder: string) {
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

export function getPageKey(filename: string) {
  return path.relative(folder, filename).slice(0, -3).replace(/\\/g, '/')
}