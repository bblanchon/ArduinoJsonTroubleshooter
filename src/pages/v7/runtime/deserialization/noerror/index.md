---
options:
  slow:
    label: It's slow
    summary: "Deserialisation is slow"
    page: /v6/runtime/deserialization/noerror/slow.md
  invalid:
    label: "I expected `InvalidInput` instead of `Ok`"
    summary: "`Ok` is incorrect; it should be `InvalidInput`"
    page: /v6/runtime/deserialization/noerror/firstchar/index.md
  crash:
    label: My program crashes
    summary: Program crashes
    page: ../crash/after/index.md
  empty:
    label: "`JsonDocument` returns empty/null values"
    summary: Program fails to extract values from the `JsonDocument`
    page: novalue/index.md
  truncated-strings:
    label: Some strings are truncated
    summary: Some strings are truncated
    page: /v6/runtime/deserialization/noerror/truncatedstrings/index.md
  missing:
    label: "Some values are missing"
    summary: Some values are missing
    page: novalue/index.md
---

So, what's the problem then?
