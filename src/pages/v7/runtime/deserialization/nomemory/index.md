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

[`NoMemory`](/v7/api/misc/deserializationerror/#nomemory) means that the [`JsonDocument`](/v7/api/jsondocument/) is too small to hold the entire document.

Please use the [ArduinoJson Assistant](/v7/assistant/) to compute the right capacity for your document.
Use the recommended capacity when creating [`JsonDocument`](/v7/api/jsondocument/) and retry.

Did this solve your issue?
