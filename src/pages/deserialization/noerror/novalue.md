---
choices:
  - id: filter
    label: "Yes"
    summary: Program uses `DeserializationOption::Filter`
    next: novalue/filter
  - id: no-filter
    label: "No"
    summary: Program doesn't use `DeserializationOption::Filter`
    next: novalue/print
---

Do you use a filter (with `DeserializationOption::Filter`)?