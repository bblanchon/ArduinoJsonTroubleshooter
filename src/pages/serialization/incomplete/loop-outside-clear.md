---
choices:
  - id: success
    label: "Yes"
    summary: Calling `JsonDocument::garbageCollect()` solves the issue
    next: /done
  - id: gc
    label: "No"
    summary: Calling `JsonDocument::garbageCollect()` doesn't solve the issue
    next: /serialization/incomplete/noloop
---

Please replace the call to [`JsonDocument::clear()`](/v6/api/jsondocument/clear/) with [`JsonDocument::garbageCollect()`](/v6/api/jsondocument/garbagecollect/).

Did this solve your issue?