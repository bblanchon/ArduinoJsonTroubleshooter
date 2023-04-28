---
options:
  - id: slow
    label: It's slow
    summary: "Deserialisation is slow"
    page: slow.md
  - id: invalid
    label: "I expected `InvalidInput` instead of `Ok`"
    summary: "`Ok` is incorrect; it should be `InvalidInput`"
    page: firstchar/index.md
  - id: crash
    label: My program crashes after calling `deserializeJson()`
    summary: Program crashes after calling `deserializeJson()`
    page: ../crash/after/index.md
  - id: empty
    label: "`JsonDocument` returns empty/null values"
    summary: Program fails to extract values from the `JsonDocument`
    page: novalue/index.md
  - id: garbage
    label: "`JsonDocument` returns garbage"
    summary: "`JsonDocument` returns garbage"
    page: garbage/index.md
  - id: changing-strings
    label: The strings in the `JsonDocument` change for no reason
    summary: The strings in the `JsonDocument` change for no reason
    page: garbage/index.md
  - id: altered
    label: "`deserializeJson()` alters the content of the input"
    summary: Input buffer is modified
    page: input-modified.md
  - id: truncated-strings
    label: Some strings are truncated
    summary: Some strings are truncated
    page: truncatedstrings/index.md
---

So, what's the problem then?