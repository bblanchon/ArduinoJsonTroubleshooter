import { PageFile } from "./loader"

interface PageError {
  fullPath: string
  message: string
}

function* getMissingFiles(files: PageFile[]): Generator<PageError> {
  const filenames = new Set(files.map((f) => f.filename))

  for (const file of files) {
    for (const option of file.options || []) {
      if (!filenames.has(option.page))
        yield {
          fullPath: file.fullPath,
          message: `file \"${option.page}\" is missing`
        }
    }
  }
}

function getUnusedFiles(files: PageFile[]): PageError[] {
  const usedPages = new Set([
    files[0].filename,
    ...files
      .map((file) => file.options || [])
      .flat()
      .map((option) => option.page)
  ])

  return files
    .filter((file) => !usedPages.has(file.filename))
    .map((file) => ({
      fullPath: file.fullPath,
      message: "this file is unused"
    }))
}

function* getMissingFields(files: PageFile[]): Generator<PageError> {
  const requiredFields = ["id", "label", "summary", "page"]

  for (const file of files) {
    for (const index in file.options || []) {
      const option = file.options![index]
      for (const field of requiredFields) {
        if (!option[field])
          yield {
            fullPath: file.fullPath,
            message: `option ${index} lacks the \"${field}\" field`
          }
      }
    }
  }
}

function getDuplicateOptions(files: PageFile[]): PageError[] {
  const uniqueFields = ["id", "label", "summary"]

  return files
    .map((file) =>
      uniqueFields.map((field) => {
        const values = file.options?.map((option) => option[field]) || []
        const duplicates = values.filter(
          (val, idx) => values.indexOf(val) !== idx
        )
        return duplicates.map((value) => ({
          file: file.filename,
          message: `duplicate option ${field} \"${value}\"`
        }))
      })
    )
    .flat(2)
}

function getInvalidOptionIds(files: PageFile[]): PageError[] {
  return files
    .map(
      (file) =>
        file.options
          ?.filter((option) => /[^a-z0-9\-]/.test(option.id))
          .map((option, index) => ({
            file: file.filename,
            message: `invalid id \"${option.id}\" for option ${index}`
          })) || []
    )
    .flat()
}

export function getErrors(files: PageFile[]): PageError[] {
  return [
    ...getMissingFiles(files),
    ...getUnusedFiles(files),
    ...getMissingFields(files),
    ...getDuplicateOptions(files),
    ...getInvalidOptionIds(files)
  ]
}
