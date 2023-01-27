---
choices:
  - id: loop
    label: "Yes"
    summary: "Program calls `serializeJson()` in a loop"
    next: incomplete/loop
  - id: no-loop
    label: "No"
    summary: "Program doesn't call `serializeJson()` in a loop"
    next: incomplete/noloop
---

Does your program call [`serializeJson()`](/v6/api/json/serializejson/) in a loop?