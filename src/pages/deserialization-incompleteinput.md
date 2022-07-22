---
choices:
  - id: stream
    label: A stream
    summary: Input comes from a stream
    next: deserialization-incompleteinput-stream-timeout
  - id: string
    label: A string object (like `String`)
    summary: Input comes from a string object
    next: deserialization-incompleteinput-string-object
  - id: pointer
    label: A pointer (like `char*` or `const char*`)
    summary: Input comes from a pointer
    next: deserialization-incompleteinput-string-pointer
---

[`IncompleteInput`](/v6/api/misc/deserializationerror/#incompleteinput) means that [`deserializeJson()`](/v6/api/json/deserializejson/) managed to parse the beginning of the JSON document, but the end was missing.

What type of input do you pass to [`deserializeJson()`](/v6/api/json/deserializejson/)?