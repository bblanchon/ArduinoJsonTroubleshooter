---
options:
  success:
    label: "Yes"
    summary: Calling `JsonDocument::garbageCollect()` solves the issue
    page: /done.md
  gc:
    label: "No"
    summary: Calling `JsonDocument::garbageCollect()` doesn't solve the issue
    page: noloop.md
---

Please replace the call to `JsonDocument::clear()` with `JsonDocument::garbageCollect()`.

Did this solve your issue?
