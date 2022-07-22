---
choices:
  - id: nul
    label: "Yes"
    summary: The input contains `\u0000`
    next: nul-not-supported
  - id: no-nul
    label: "No"
    summary: The input doesn't contain `\u0000`
    next: deserialization/noerror/truncatedstrings-input
---

Does the JSON input contain the Unicode character `\u0000`?