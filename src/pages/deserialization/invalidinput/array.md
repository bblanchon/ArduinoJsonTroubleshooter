---
choices:
  - id: two-calls
    label: "Yes"
    summary: Program calls `deserializeJson()` twice
    next: /deserialization/invalidinput/array-twice
  - id: one-call
    label: "No"
    summary: Program doesn't call `deserializeJson()` twice
    next: /deserialization/invalidinput/string-jsonlint
---

Did you call [`deserializeJson()`](/v6/api/json/deserializejson/) twice with the same input buffer?