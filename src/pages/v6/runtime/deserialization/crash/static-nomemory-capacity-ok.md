---
options:
  success:
    label: "Yes"
    summary: Increasing the capacity fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Increasing the capacity doesn't fix the issue
    page: /deadend.md
---

Good news!  
The memory allocation succeeds; the `DynamicJsonDocument` is simply too small, so you need to increase its capacity.

Use the [ArduinoJson Assistant](/v6/assistant/) to compute the right capacity for your input.

Did this solve your issue?
