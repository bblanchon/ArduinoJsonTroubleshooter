import { PageMap } from "./pages"

interface PageError {
  page: string
  message: string
}


function getMissingPages(pages: PageMap): PageError[] {
  return Object.entries(pages).map(([key, page]) =>
    page.options?.filter(option => option.next && !(option.next in pages))
      .map((option) => ({
        page: key,
        message: `page \"${option.next}\" is missing`
      })) || []
  ).flat()
}

function getUnusedPages(pages: PageMap): PageError[] {
  const usedPages = new Set([
    "/",
    ...Object.values(pages)
      .filter((page) => page.options !== undefined)
      .map((page) => page.options!)
      .flat()
      .map((option) => option.next)
  ])

  return Object.keys(pages)
    .filter((key) => !usedPages.has(key))
    .map((key) => ({
      page: key,
      message: "this page is unused"
    }))
}

function getMissingFields(pages: PageMap): PageError[] {
  const requiredFields = ["id", "label", "summary", "next"]

  return Object.entries(pages).map(([key, page]) =>
    page.options?.map((option, index) =>
      requiredFields.filter(field => !option[field])
        .map((field) => ({
          page: key,
          message: `option ${index} lacks the \"${field}\" field`
        }))
    ) || []
  ).flat(2)
}

function getDuplicateOptions(pages: PageMap): PageError[] {
  const uniqueFields = ["id", "label", "summary"]

  return Object.entries(pages).map(([key, page]) =>
    uniqueFields.map((field) => {
      const values = page.options?.map((option) => option[field]) || []
      const duplicates = values.filter(
        (val, idx) => values.indexOf(val) !== idx
      )
      return duplicates.map(
        (value) => ({
          page: key,
          message: `duplicate option ${field} \"${value}\"`
        })
      )
    })
  ).flat(2)
}

function getInvalidOptionIds(pages: PageMap): PageError[] {
  return Object.entries(pages).map(([key, page]) =>
    page.options?.filter(option => (/[^a-z0-9\-]/.test(option.id)))
      .map((option, index) => ({
        page: key,
        message: `invalid id \"${option.id}\" for option ${index}`
      })) || []
  ).flat()
}

export function getErrors(pages: PageMap): PageError[] {
  return [
    ...getMissingPages(pages),
    ...getUnusedPages(pages),
    ...getMissingFields(pages),
    ...getDuplicateOptions(pages),
    ...getInvalidOptionIds(pages),
  ]
}