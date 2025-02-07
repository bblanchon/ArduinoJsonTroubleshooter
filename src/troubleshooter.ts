/// <reference path="../plugins/troubleshooter/client.d.ts" />
import pages from "virtual:troubleshooter"

export interface Option {
  id: string
  label: string
  summary: string
  page: number
  inputId: string
  hash: string
  missing: boolean
  selected: boolean
  regex?: string
}

export interface Step {
  content: string
  hash: string
  options?: Option[]
  selectedOption?: Option
  tags?: string[]
  filename?: string // only in dev
  fullPath?: string // only in dev
}

function makeStep(pageId: number, hash?: string, number?: number): Step {
  const page = pages[pageId]
  return {
    ...page,
    hash: hash || "#",
    options: page.options?.map((option, idx) => ({
      ...option,
      regex: option.regex,
      inputId: `option-${pageId}-${idx}`,
      hash: (hash ? hash + "/" : "#") + option.id,
      missing: !pages[option.page],
      selected: false,
    })),
  }
}

export function getSteps(hash?: string): Step[] {
  const steps = [makeStep(0)]

  if (hash) {
    let lastStep = steps[0]
    for (let optionId of hash.substring(1).split("/")) {
      const option = lastStep.options?.find((option) => option.id === optionId)
      if (!option) {
        console.error(`Option "${optionId}" not found`)
        break
      }
      option.selected = true
      lastStep.selectedOption = option
      lastStep = makeStep(option.page, option.hash)
      if (!lastStep) break
      steps.push(lastStep)
    }
  }

  return steps
}

export function generateReport(steps: Step[]): string {
  return steps
    .map((step) => step.selectedOption)
    .filter((option) => !!option)
    .map((option, index) => `${index + 1}. ${option!.summary}`)
    .join("\n")
}
