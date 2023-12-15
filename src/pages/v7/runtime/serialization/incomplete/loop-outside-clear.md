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

Please replace the call to [`JsonDocument::clear()`](/v7/api/jsondocument/clear/) with [`JsonDocument::garbageCollect()`](/v7/api/jsondocument/garbagecollect/).

Did this solve your issue?
