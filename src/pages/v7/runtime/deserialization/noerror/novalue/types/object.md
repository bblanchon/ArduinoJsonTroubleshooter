---
options:
  implicit:
    label: '`JsonObject object = doc["key"];`'
    summary: The program uses implicit conversion to `JsonObject`
    page: /deadend.md
  as:
    label: '`doc["key"].as<JsonObject>()`'
    summary: The program uses `as<JsonObject>()`
    page: /deadend.md
  to:
    label: '`doc["key"].to<JsonObject>()`'
    summary: The program uses `to<JsonObject>()`
    page: object-to.md
---

How do you extract the `JsonObject` from the `JsonDocument`?
