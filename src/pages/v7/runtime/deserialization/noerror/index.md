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
  truncated-strings:
    label: Some strings are truncated
    summary: Some strings are truncated
    page: /v6/runtime/deserialization/noerror/truncatedstrings/index.md
---

So, what's the problem then?
