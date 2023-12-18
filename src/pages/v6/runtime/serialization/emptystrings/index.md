---
options:
  deserialize-yes:
    label: "Yes"
    summary: Program calls `deserializeJson()`
    page: deserialize.md
  deserialize-no:
    label: "No"
    summary: Program doesn't call `deserializeJson()`
    page: /deadend.md
---

Do you call `deserializeJson()` before calling `serializeJson()`? (with the same `JsonDocument`)
