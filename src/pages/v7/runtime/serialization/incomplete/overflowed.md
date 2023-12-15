---
options:
  success:
    label: "Yes"
    summary: Increasing the capacity of the `JsonDocument` solves the issue.
    page: /done.md
  assistant-is-wrong:
    label: Yes, but the required capacity is greater than what the ArduinJson Assistant says.
    summary: The required capacity is greater than what the ArduinJson Assistant says.
    page: assistant-is-wrong.md
  capacity-increased:
    label: "No"
    summary: Increasing the capacity of the `JsonDocument` doesn't solve the issue.
    page: check-capacity.md
---

[`JsonDocument::overflowed()`](/v7/api/jsondocument/overflowed/) returns `true` when you try to insert a value in the [`JsonDocument`](/v7/api/jsondocument/), but there isn't enough room to store it.

The solution is to increase the capacity of the [`JsonDocument`](/v7/api/jsondocument/).  
As usual, use the [ArduinoJson Assistant](/v7/assistant/) to compute the right capacity for your project.

Did this solve your issue?
