export interface Option {
  id: string
  label: string
  summary: string
  page: number
}

export interface Page {
  filename?: string
  content: string
  options?: Option[]
  tags?: string[]
}
