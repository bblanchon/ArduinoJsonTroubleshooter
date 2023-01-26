export interface Choice {
  id: string
  label: string
  summary: string
  next: string
}

export interface Page {
  content: string
  choices?: Choice[]
  needs_assistance: boolean
}

export type PageMap = { [key: string]: Page }
