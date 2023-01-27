---
choices:
  - id: document
    label: "`JsonDocument`"
    summary: "Program calls `serializeJson(const JsonDocument&, ...)`"
    next: /serialization/garbage/document
  - id: array
    label: "`JsonArray` (or `JsonArrayConst`)"
    summary: "Program calls `serializeJson(JsonArrayConst, ...)`"
    next: /serialization/garbage/jsonarray
  - id: object
    label: "`JsonObject` (or `JsonObjectConst`)"
    summary: "Program calls `serializeJson(JsonObjectConst, ...)`"
    next: /serialization/garbage/jsonobject
  - id: variant
    label: "`JsonVariant` (or `JsonVariantConst`)"
    summary: "Program calls `serializeJson(JsonVariantConst, ...)`"
    next: /serialization/garbage/jsonvariant
---

What is the type of the first argument passed to [`serializeJson()`](/v6/api/json/serializejson/)?