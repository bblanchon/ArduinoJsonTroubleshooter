---
choices:
  - id: valid
    label: Document is valid
    next: jsonlint-valid
    summary: jsonlint says the document is valid
  - id: invalid
    label: Document is invalid
    next: jsonlint-invalid
    summary: jsonlint says the document is invalid
---

Let's make sure that your input is actually invalid.

Please go to [jsonlint.com](https://jsonlint.com/), paste your input, and press "Validate JSON."

What does it say?