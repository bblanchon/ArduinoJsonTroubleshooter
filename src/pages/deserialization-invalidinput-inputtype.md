---
choices:
  - id: stream
    label: A stream
    summary: The input is a stream
    next: deserialization-invalidinput-stream-bom
  - id: string
    label: A string
    summary: The input is a string
    next: deserialization-invalidinput-string-bom
---

What's the type of the input that you pass to [`deserializeJson()`](/v6/api/json/deserializejson/)