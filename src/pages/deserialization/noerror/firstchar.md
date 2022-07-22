---
choices:
  - id: brace
    label: "An opening brace: `{`"
    next: deserialization/noerror/firstchar-brace
    summary: The first character is `{`
  - id: bracket
    label: "An opening bracket: `[`"
    next: deserialization/noerror/firstchar-bracket
    summary: The first character is `[`
  - id: quote
    label: "A quote: `\"`"
    next: deserialization/noerror/firstchar-quote
    summary: The first character is `"`
  - id: other
    label: None of the above
    next: deserialization/noerror/unacceptable
    summary: The first character is neither `{`, nor `[`, nor `"`
---

What's the first character of your input?