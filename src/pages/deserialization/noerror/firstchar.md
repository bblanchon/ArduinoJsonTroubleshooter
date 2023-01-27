---
choices:
  - id: brace
    label: "An opening brace: `{`"
    next: firstchar-brace
    summary: The first character is `{`
  - id: bracket
    label: "An opening bracket: `[`"
    next: firstchar-bracket
    summary: The first character is `[`
  - id: quote
    label: "A quote: `\"`"
    next: firstchar-quote
    summary: The first character is `"`
  - id: other
    label: None of the above
    next: unacceptable
    summary: The first character is neither `{`, nor `[`, nor `"`
---

What's the first character of your input?