---
choices:
  - id: success
    label: "Yes"
    summary: Increasing the capacity of the `JsonDocument` fixes the issue
    next: done
  - id: increased-capacity
    label: "No"
    summary: Increasing the capacity of the `JsonDocument` doesn't fix the issue
    next: deserialization-nomemory-document
--- 

[`NoMemory`](/v6/api/misc/deserializationerror/#nomemory) means that the [`JsonDocument`](/v6/api/jsondocument/) is too small to hold the entire document.

Please use the [ArduinoJson Assistant](/v6/assistant/) to compute the right capacity for your document.
Use the recommended capacity when creating [`JsonDocument`](/v6/api/jsondocument/) and retry.

Did this solve your issue?