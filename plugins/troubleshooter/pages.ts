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

interface PageFrontmatter {
  choices?: Choice[]
  needs_assistance?: boolean
}

export interface Page {
  content: string
  choices?: Choice[]
  needs_assistance: boolean
}

export type PageMap = { [key: string]: Page }

export function loadPageFile(filename: string, mdi: MarkdownIt): Page {
  const { data: frontmatter, content }
    : { data: PageFrontmatter, content: string }
    = matter(readFileSync(filename), { excerpt: false })
  return {
    content: mdi.render(content),
    needs_assistance: !!frontmatter.needs_assistance,
    choices: frontmatter.choices?.map((choice) => ({
      ...choice,
      label: mdi.renderInline(choice.label),
      summary: mdi.renderInline(choice.summary),
    }))
  }
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