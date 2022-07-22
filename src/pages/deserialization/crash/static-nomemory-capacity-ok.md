---
choices:
  - id: success
    label: "Yes"
    summary: Increasing the capacity fixes the issue
    next: done
  - id: failure
    label: "No"
    summary: Increasing the capacity doesn't fix the issue
    next: deadend
---

Good news!  
The memory allocation succeeds; the [`DynamicJsonDocument`](/v6/api/dynamicjsondocument/) is simply too small, so you need to increase its capacity.

Use the [ArduinoJson Assistant](/v6/assistant/) to compute the right capacity for your input.

Did this solve your issue?