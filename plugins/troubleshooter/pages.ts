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