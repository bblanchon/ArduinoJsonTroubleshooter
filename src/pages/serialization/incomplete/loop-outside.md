---
options:
  success:
    label: "Yes"
    summary: Calling `JsonDocument::clear()` solves the issue
    page: /done.md
  clear:
    label: "No"
    summary: Calling `JsonDocument::clear()` doesn't solve the issue
    page: noloop.md
  missing:
    label: "Yes, but now some values are missing"
    summary: Calling `JsonDocument::clear()` solves the issue but removes other values
    page: loop-outside-clear.md
---

We can try to clear the content of the [`JsonDocument`](/v6/api/jsondocument/).

Please call [`JsonDocument::clear()`](/v6/api/jsondocument/clear/) at the beginning of the loop.

Did this solve your issue?