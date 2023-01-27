/// <reference path="../plugins/troubleshooter/client.d.ts" />
import pages from "virtual:troubleshooter"

interface Choice {
  id: string
  label: string
  summary: string
  next: string
  inputId: string
  hash: string
  missing: boolean
  selected: boolean
}

interface Step {
  content: string
  number: number
  slug: string
  hash: string
  id: string
  choices?: Choice[]
  selectedChoice?: Choice
  needs_assistance: boolean
}

function makeStep(pageKey: string, hash?: string, number?: number): Step {
  const page = pages[pageKey]
  return {
    ...page,
    number: number || 1,
    slug: pageKey,
    hash: hash || "#",
    id: (hash || "#start").substring(1),
    choices: page.choices?.map((choice) => ({
      ...choice,
      inputId: (hash ? hash.substring(1) + "/" : "") + choice.id,
      hash: (hash ? hash + "/" : "#") + choice.id,
      missing: !pages[choice.next],
      selected: false,
    }))
  }
}

export function getSteps(hash?: string): Step[] {
  const steps = [makeStep("/")]

  if (hash) {
    let lastStep = steps[0]
    for (let choiceId of hash.substring(1).split("/")) {
      const choice = lastStep.choices?.find(
        (choice) => choice.id === choiceId
      )
      if (!choice) {
        console.error(`Choice "${choiceId}" not found`)
        break
      }
      choice.selected = true
      lastStep.selectedChoice = choice
      lastStep = makeStep(choice.next, choice.hash, lastStep.number + 1)
      if (!lastStep) break
      steps.push(lastStep)
    }
  }

  return steps
}

export function generateReport(steps: Step[]): string {
  return steps
    .map((step) => step.selectedChoice)
    .filter((choice) => !!choice)
    .map((choice, index) => `${index + 1}. ${choice!.summary}`)
    .join("\n")
}