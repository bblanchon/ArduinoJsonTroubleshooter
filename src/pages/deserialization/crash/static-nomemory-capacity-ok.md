---
options:
  - id: success
    label: "Yes"
    summary: Increasing the capacity fixes the issue
    page: /done.md
  - id: failure
    label: "No"
    summary: Increasing the capacity doesn't fix the issue
    page: /deadend.md
---

Good news!  
The memory allocation succeeds; the [`DynamicJsonDocument`](/v6/api/dynamicjsondocument/) is simply too small, so you need to increase its capacity.

Use the [ArduinoJson Assistant](/v6/assistant/) to compute the right capacity for your input.

Did this solve your issue?