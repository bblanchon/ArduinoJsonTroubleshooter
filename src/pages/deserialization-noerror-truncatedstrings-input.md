---
choices:
  - id: http
    label: "Yes"
    summary: The input comes from an HTTP response
    next: deserialization-noerror-truncatedstrings-http
  - id: no-nul
    label: "No"
    summary: The input doesn't come from an HTTP response
    next: deadend
---

Does the JSON input come from an HTTP response?