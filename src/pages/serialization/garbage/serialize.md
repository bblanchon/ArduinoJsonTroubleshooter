---
options:
  - id: document
    label: "`JsonDocument`"
    summary: "Program calls `serializeJson(const JsonDocument&, ...)`"
    page: document.md
  - id: array
    label: "`JsonArray` (or `JsonArrayConst`)"
    summary: "Program calls `serializeJson(JsonArrayConst, ...)`"
    page: jsonarray.md
  - id: object
    label: "`JsonObject` (or `JsonObjectConst`)"
    summary: "Program calls `serializeJson(JsonObjectConst, ...)`"
    page: jsonobject.md
  - id: variant
    label: "`JsonVariant` (or `JsonVariantConst`)"
    summary: "Program calls `serializeJson(JsonVariantConst, ...)`"
    page: jsonvariant.md
---

What is the type of the first argument passed to [`serializeJson()`](/v6/api/json/serializejson/)?