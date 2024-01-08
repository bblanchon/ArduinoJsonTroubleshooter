export interface Option {
  id: string
  label: string
  summary: string
  page: number
}

export interface Page {
  filename?: string // only in dev
  fullPath?: string // only in dev
  content: string
  options?: Option[]
  tags?: string[]
}
