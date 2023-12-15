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

Do you call [`deserializeJson()`](/v7/api/json/deserializejson/) before calling [`serializeJson()`](/v7/api/json/serializejson/)? (with the same [`JsonDocument`](/v7/api/jsondocument/))
