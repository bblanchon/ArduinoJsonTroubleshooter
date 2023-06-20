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

Do you call [`deserializeJson()`](/v6/api/json/deserializejson/) before calling [`serializeJson()`](/v6/api/json/serializejson/)? (with the same [`JsonDocument`](/v6/api/jsondocument/))