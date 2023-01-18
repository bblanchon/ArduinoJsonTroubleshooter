import { PageMap } from "./pages"

interface PageError {
  page: string
  message: string
}


function getMissingPages(pages: PageMap): PageError[] {
  return Object.entries(pages).map(([key, page]) =>
    page.choices?.filter(choice => choice.next && !(choice.next in pages))
      .map((choice) => ({
        page: key,
        message: `page \"${choice.next}\" is missing`
      })) || []
  ).flat()
}

function getUnusedPages(pages: PageMap): PageError[] {
  const usedPages = new Set([
    "start",
    ...Object.values(pages)
      .filter((page) => page.choices !== undefined)
      .map((page) => page.choices!)
      .flat()
      .map((choice) => choice.next)
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
    page.choices?.map((choice, index) =>
      requiredFields.filter(field => !choice[field])
        .map((field) => ({
          page: key,
          message: `choice ${index} lacks the \"${field}\" field`
        }))
    ) || []
  ).flat(2)
}

function getDuplicateChoices(pages: PageMap): PageError[] {
  const uniqueFields = ["id", "label", "summary"]

  return Object.entries(pages).map(([key, page]) =>
    uniqueFields.map((field) => {
      const values = page.choices?.map((choice) => choice[field]) || []
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
}

function getInvalidChoiceIds(pages: PageMap): PageError[] {
  return Object.entries(pages).map(([key, page]) =>
    page.choices?.filter(choice => (/[^a-z0-9\-]/.test(choice.id)))
      .map((choice, index) => ({
        page: key,
        message: `invalid id \"${choice.id}\" for choice ${index}`
      })) || []
  ).flat()
}

export function getErrors(pages: PageMap): PageError[] {
  return [
    ...getMissingPages(pages),
    ...getUnusedPages(pages),
    ...getMissingFields(pages),
    ...getDuplicateChoices(pages),
    ...getInvalidChoiceIds(pages),
  ]
}