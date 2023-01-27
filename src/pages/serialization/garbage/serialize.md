---
choices:
  - id: document
    label: "`JsonDocument`"
    summary: "Program calls `serializeJson(const JsonDocument&, ...)`"
    next: document
  - id: array
    label: "`JsonArray` (or `JsonArrayConst`)"
    summary: "Program calls `serializeJson(JsonArrayConst, ...)`"
    next: jsonarray
  - id: object
    label: "`JsonObject` (or `JsonObjectConst`)"
    summary: "Program calls `serializeJson(JsonObjectConst, ...)`"
    next: jsonobject
  - id: variant
    label: "`JsonVariant` (or `JsonVariantConst`)"
    summary: "Program calls `serializeJson(JsonVariantConst, ...)`"
    next: jsonvariant
---

What is the type of the first argument passed to [`serializeJson()`](/v6/api/json/serializejson/)?