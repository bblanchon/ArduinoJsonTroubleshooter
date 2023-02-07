---
options:
  - id: crash
    label: The program crashes
    summary: Program crashes
    next: crash
  - id: empty
    label: The output is empty (e.g. `{}`, `[]`, or `null`)
    summary: Output is empty
    next: empty
  - id: incomplete
    label: The output is incomplete
    summary: Output is incomplete
    next: incomplete
  - id: garbage
    label: The output contains garbage
    summary: Output contains garbage
    next: garbage
  - id: empty-strings
    label: The output contains empty strings
    summary: Output contains empty strings
    next: emptystrings
  - id: "null"
    label: The output contains `null`
    summary: Output contains null
    next: incomplete
  - id: float
    label: Floating-point values contain too many decimal digits
    summary: Floating-point values contain too many decimal digits
    next: floats
  - id: slow
    label: It's slow
    summary: Serialization is slow
    next: slow
---

What's the problem?