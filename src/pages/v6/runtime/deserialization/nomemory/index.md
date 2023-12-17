---
options:
  success:
    label: "Yes"
    summary: Increasing the capacity of the `JsonDocument` fixes the issue
    page: /done.md
  increased-capacity:
    label: "No"
    summary: Increasing the capacity of the `JsonDocument` doesn't fix the issue
    page: document.md
--- 

[`NoMemory`](/v6/api/misc/deserializationerror/#nomemory) means that the `JsonDocument` is too small to hold the entire document.

Please use the [ArduinoJson Assistant](/v6/assistant/) to compute the right capacity for your document.
Use the recommended capacity when creating `JsonDocument` and retry.

Did this solve your issue?
