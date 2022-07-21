---
choices:
  - id: success
    label: "Yes"
    summary: Calling `JsonDocument::garbageCollect()` solves the issue
    next: done
  - id: garbageCollect
    label: "No"
    summary: Calling `JsonDocument::garbageCollect()` doesn't solve the issue
    next: serialization-incomplete-noloop
---

Please replace the call to [`JsonDocument::clear()`]({% link v6/api/jsondocument/clear.md %}) with [`JsonDocument::garbageCollect()`]({% link v6/api/jsondocument/garbagecollect.md %}).

Did this solve your issue?