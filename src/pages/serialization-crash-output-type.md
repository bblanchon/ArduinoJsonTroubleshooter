---
choices:
  - id: char-array
    label: "`char[]`"
    summary: Output type is `char[]`
    next: serialization-crash-output-char-array
  - id: char-ptr
    label: "`char*`"
    summary: Output type is `char*`
    next: deadend
  - id: arduino-string
    label: "`String`"
    summary: Output type is `String`
    next: deadend
  - id: arduino-stream
    label: "`Stream`"
    summary: Output type is `Stream`
    next: deadend
---

What is the type of the second argument passed to [`serializeJson()`]({% link v6/api/json/serializejson.md %})?