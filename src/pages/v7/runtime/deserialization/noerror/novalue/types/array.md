---
options:
  implicit:
    label: '`JsonArray array = doc["key"];`'
    summary: The program uses implicit conversion to `JsonArray`
    page: /deadend.md
  as:
    label: '`doc["key"].as<JsonArray>()`'
    summary: The program uses `as<JsonArray>()`
    page: /deadend.md
  to:
    label: '`doc["key"].to<JsonArray>()`'
    summary: The program uses `to<JsonArray>()`
    page: array-to.md
---

How do you extract the `JsonArray` from the `JsonDocument`?
