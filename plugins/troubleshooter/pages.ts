export interface Option {
  id: string
  label: string
  summary: string
  next: string
}

export interface Page {
  content: string
  options?: Option[]
  tags?: string[]
}

export type PageMap = { [key: string]: Page }
