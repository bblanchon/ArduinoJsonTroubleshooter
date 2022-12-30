const pagesModules = import.meta.globEager("./**/*.md")

const pages = {}
for (const path in pagesModules) {
  const id = path.substring(2, path.length - 3)
  const module = pagesModules[path]
  pages[id] = {
    component: module.default,
    choices: module.frontmatter.choices || [],
    needs_assistance: module.frontmatter.needs_assistance
  }
}

function warn(message) {
  console.warn(message)
  import.meta.hot.send("warning", { message })
}

function reportMissingPage(page, referrer) {
  warn(`Page \"${page}\" is missing (referenced from \"${referrer}\")`)
}

function reportUnusedPage(page) {
  warn(`Page \"${page}\" is unused`)
}

function reportChoiceMissingField(page, choice, field) {
  warn(`Page \"${page}\": choice ${choice} lacks the \"${field}\" field`)
}

function reportDuplicateChoice(page, field, value) {
  warn(`Page \"${page}\": duplicate choice ${field} \"${value}\"`)
}

if (import.meta.env.DEV) {
  Object.entries(pages).forEach(([key, page]) => {
    page.choices.forEach((choice) => {
      if (choice.next && !(choice.next in pages))
        reportMissingPage(choice.next, key)
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
    .forEach(reportUnusedPage)

  const requiredFields = ["id", "label", "summary", "next"]
  Object.entries(pages).forEach(([key, page]) => {
    page.choices.forEach((choice, index) => {
      requiredFields.forEach((field) => {
        if (!choice[field]) reportChoiceMissingField(key, index, field)
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
      duplicates.forEach((value) => reportDuplicateChoice(key, field, value))
    })
  })

  Object.entries(pages).forEach(([key, page]) => {
    page.choices.forEach((choice, index) => {
      if (/[^a-z0-9\-]/.test(choice.id))
        warn(`Page \"${key}\": invalid id \"${choice.id}\" for choice ${index}`)
    })
  })
}

export default pages
