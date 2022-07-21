---
choices:
  - id: string
    label: "Yes"
    summary: Program uses `String`
    next: serialization-garbage-document-dynamic-string
  - id: no-string
    label: "No"
    summary: Program doesn't use `String`
    next: deadend
---

Do you use {% include links/arduino/string/class %} in your program?