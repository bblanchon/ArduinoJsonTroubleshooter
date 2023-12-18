---
options:
  slow:
    label: It's slow
    summary: "Deserialisation is slow"
    page: slow.md
  invalid:
    label: "I expected `InvalidInput` instead of `Ok`"
    summary: "`Ok` is incorrect; it should be `InvalidInput`"
    page: firstchar/index.md
  crash:
    label: My program crashes after calling `deserializeJson()`
    summary: Program crashes after calling `deserializeJson()`
    page: ../crash/after/index.md
  empty:
    label: "`JsonDocument` returns empty/null values"
    summary: Program fails to extract values from the `JsonDocument`
    page: novalue/index.md
  missing:
    label: Some values are missing
    summary: Some values are missing
    page: missing/index.md
  garbage:
    label: "`JsonDocument` returns garbage"
    summary: "`JsonDocument` returns garbage"
    page: garbage/index.md
  changing-strings:
    label: The strings in the `JsonDocument` change for no reason
    summary: The strings in the `JsonDocument` change for no reason
    page: garbage/index.md
  altered:
    label: "`deserializeJson()` alters the content of the input"
    summary: Input buffer is modified
    page: input-modified.md
  truncated-strings:
    label: Some strings are truncated
    summary: Some strings are truncated
    page: /v6/runtime/deserialization/noerror/truncatedstrings/index.md
---

So, what's the problem then?
