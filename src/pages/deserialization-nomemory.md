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

[`NoMemory`]({% link v6/api/misc/deserializationerror.md %}#nomemory) means that the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) is too small to hold the entire document.

Please use the [ArduinoJson Assistant]({% link v6/assistant/index.html %}) to compute the right capacity for your document.
Use the recommended capacity when creating [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) and retry.

Did this solve your issue?