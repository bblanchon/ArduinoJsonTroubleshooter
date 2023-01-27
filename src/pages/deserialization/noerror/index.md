---
choices:
  - id: slow
    label: It's slow
    summary: "Deserialisation is slow"
    next: slow
  - id: invalid
    label: "I expected `InvalidInput` instead of `Ok`"
    summary: "`Ok` is incorrect; it should be `InvalidInput`"
    next: firstchar
  - id: crash
    label: My program crashes after calling `deserializeJson()`
    summary: Program crashes after calling `deserializeJson()`
    next: ../crash/after
  - id: empty
    label: "`JsonDocument` returns empty/null values"
    summary: Program fails to extract values from the `JsonDocument`
    next: novalue
  - id: garbage
    label: "`JsonDocument` returns garbage"
    summary: "`JsonDocument` returns garbage"
    next: garbage
  - id: changing-strings
    label: The strings in the `JsonDocument` change for no reason
    summary: The strings in the `JsonDocument` change for no reason
    next: garbage
  - id: altered
    label: "`deserializeJson()` alters the content of the input"
    summary: Input buffer is modified
    next: input-modified
  - id: truncated-strings
    label: Some strings are truncated
    summary: Some strings are truncated
    next: truncatedstrings
---

So, what's the problem then?