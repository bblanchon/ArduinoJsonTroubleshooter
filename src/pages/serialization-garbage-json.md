---
choices:
  - id: deserialize-yes
    label: "Yes"
    summary: Program calls `deserializeJson()`
    next: serialization-garbage-deserialize
  - id: deserialize-no
    label: "No"
    summary: Program doesn't call `deserializeJson()`
    next: serialization-garbage-serialize
---

Do you call [`deserializeJson()`](/v6/api/json/deserializejson/) before calling [`serializeJson()`](/v6/api/json/serializejson/)? (with the same [`JsonDocument`](/v6/api/jsondocument/))