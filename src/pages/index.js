import MarkdownIt from "markdown-it"

const md = MarkdownIt()

const pagesModules = import.meta.globEager("./**/*.md")

const pages = {}
for (const path in pagesModules) {
  const id = path.substring(2, path.length - 3)
  const module = pagesModules[path]
  pages[id] = {
    component: module.default,
    choices:
      module.frontmatter.choices?.map((c) => ({
        id: c.id,
        next: c.next,
        label: md.renderInline(c.label),
        summary: md.renderInline(c.summary)
      })) || [],
    needs_assistance: module.frontmatter.needs_assistance
  }
}

export default pages
