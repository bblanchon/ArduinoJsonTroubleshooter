---
choices:
  - id: brace
    label: "An opening brace: `{`"
    next: brace
    summary: The first character is `{`
  - id: bracket
    label: "An opening bracket: `[`"
    next: bracket
    summary: The first character is `[`
  - id: quote
    label: "A quote: `\"`"
    next: quote
    summary: The first character is `"`
  - id: other
    label: None of the above
    next: ../unacceptable
    summary: The first character is neither `{`, nor `[`, nor `"`
---

What's the first character of your input?