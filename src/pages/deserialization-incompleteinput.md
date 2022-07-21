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

[`IncompleteInput`]({% link v6/api/misc/deserializationerror.md %}#incompleteinput) means that [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}) managed to parse the beginning of the JSON document, but the end was missing.

What type of input do you pass to [`deserializeJson()`]({% link v6/api/json/deserializejson.md %})?