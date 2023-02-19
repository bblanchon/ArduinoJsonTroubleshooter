---
options:
  - id: stream
    label: A stream
    summary: Input comes from a stream
    page: stream-timeout.md
  - id: string
    label: A string object (like `String`)
    summary: Input comes from a string object
    page: string-object.md
  - id: pointer
    label: A pointer (like `char*` or `const char*`)
    summary: Input comes from a pointer
    page: string-pointer.md
---

[`IncompleteInput`](/v6/api/misc/deserializationerror/#incompleteinput) means that [`deserializeJson()`](/v6/api/json/deserializejson/) managed to parse the beginning of the JSON document, but the end was missing.

What type of input do you pass to [`deserializeJson()`](/v6/api/json/deserializejson/)?