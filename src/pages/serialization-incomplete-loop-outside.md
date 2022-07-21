---
choices:
  - id: success
    label: "Yes"
    summary: Calling `JsonDocument::clear()` solves the issue
    next: done
  - id: clear
    label: "No"
    summary: Calling `JsonDocument::clear()` doesn't solve the issue
    next: serialization-incomplete-noloop
  - id: missing
    label: "Yes, but now some values are missing"
    summary: Calling `JsonDocument::clear()` solves the issue but removes other values
    next: serialization-incomplete-loop-outside-clear
---

We can try to clear the content of the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}).

Please call [`JsonDocument::clear()`]({% link v6/api/jsondocument/clear.md %}) at the beginning of the loop.

Did this solve your issue?