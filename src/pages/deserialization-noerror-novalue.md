---
choices:
  - id: filter
    label: "Yes"
    summary: Program uses `DeserializationOption::Filter`
    next: deserialization-noerror-novalue-filter
  - id: no-filter
    label: "No"
    summary: Program doesn't use `DeserializationOption::Filter`
    next: deserialization-noerror-novalue-print
---

Do you use a filter (with `DeserializationOption::Filter`)?