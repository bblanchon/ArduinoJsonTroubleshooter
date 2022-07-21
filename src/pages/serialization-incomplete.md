---
choices:
  - id: loop
    label: "Yes"
    summary: "Program calls `serializeJson()` in a loop"
    next: serialization-incomplete-loop
  - id: no-loop
    label: "No"
    summary: "Program doesn't call `serializeJson()` in a loop"
    next: serialization-incomplete-noloop
---

Does your program call [`serializeJson()`]({% link v6/api/json/serializejson.md %}) in a loop?