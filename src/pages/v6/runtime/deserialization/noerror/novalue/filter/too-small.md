---
options:
  success:
    label: "Yes"
    summary: Increasing the filter's capacity fixes the issue
    page: /done.md
  size-increased:
    label: "No"
    summary: Increasing the filter's capacity doesn't fix the issue
    page: assistant.md
---

The filter's `JsonDocument` is too small; please increase its capacity and try again.

If you want, you can use the [ArduinoJson Assistant](/v6/assistant/) to compute the required capacity.

Did this solve your issue?
