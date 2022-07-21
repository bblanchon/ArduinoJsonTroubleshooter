---
choices:
  - id: deserialize-yes
    label: "Yes"
    summary: Program calls `deserializeJson()`
    next: serialization-emptystrings-deserialize
  - id: deserialize-no
    label: "No"
    summary: Program doesn't call `deserializeJson()`
    next: deadend
---

Do you call [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}) before calling [`serializeJson()`]({% link v6/api/json/serializejson.md %})? (with the same [`JsonDocument`]({% link v6/api/jsondocument/index.md %}))