---
options:
  success:
    label: "Yes"
    summary: Freeing some memory solves the issue.
    page: /done.md
  failure:
    label: "No"
    summary: Freeing some memory doesn't solve the issue.
    page: print.md
---

`JsonDocument::overflowed()` returns `true` when you try to insert a value in the `JsonDocument`, but the memory allocation fails.

The solution is to free some memory or upgrade your microcontroller.
You can use the [ArduinoJson Assistant](/v7/assistant/) to check if your microcontroller has enough memory.

Did this solve your issue?
