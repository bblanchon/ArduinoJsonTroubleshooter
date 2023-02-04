---
choices:
  - id: char-array
    label: "`char[]`"
    summary: Output type is `char[]`
    next: char-array
  - id: char-ptr
    label: "`char*`"
    summary: Output type is `char*`
    next: char-ptr
  - id: arduino-string
    label: "`String`"
    summary: Output type is `String`
    next: /deadend
  - id: arduino-stream
    label: "`Stream`"
    summary: Output type is `Stream`
    next: /deadend
---

What is the type of the second argument passed to [`serializeJson()`](/v6/api/json/serializejson/)?