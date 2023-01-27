---
choices:
  - id: success
    label: "Yes"
    summary: Calling `JsonDocument::clear()` solves the issue
    next: /done
  - id: clear
    label: "No"
    summary: Calling `JsonDocument::clear()` doesn't solve the issue
    next: noloop
  - id: missing
    label: "Yes, but now some values are missing"
    summary: Calling `JsonDocument::clear()` solves the issue but removes other values
    next: loop-outside-clear
---

We can try to clear the content of the [`JsonDocument`](/v6/api/jsondocument/).

Please call [`JsonDocument::clear()`](/v6/api/jsondocument/clear/) at the beginning of the loop.

Did this solve your issue?