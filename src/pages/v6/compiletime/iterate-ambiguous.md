---
options:
  success:
    label: "Yes"
    summary: Calling `as<JsonObject>()` or `as<JsonArray>()` solves the issue
    page: /done.md
  failure:
    label: "No"
    summary:  Calling `as<JsonObject>()` or `as<JsonArray>()` doesn't solve the issue
    page: /deadend.md
---

You get this error when you try to iterate over a `JsonDocument` or a `JsonVariant`.

For example, it happens if you do this:

```c++
for (JsonPair p : doc["config"]) {
  // ...
}
```

Indeed, you cannot iterate a `JsonVariant` like so because there is an ambiguity: the `JsonVariant` could point to either an array or an object, and this information is only available at runtime.

For this reason, we need to tell the compiler which type of structure we expect by casting the `JsonVariant` to a `JsonArray` or `JsonObject`.
For example, we could solve the above snippet like so:

```c++
for (JsonPair p : doc["config"].as<JsonObject>()) {
  // ...
}
```

Did this solve your issue?
