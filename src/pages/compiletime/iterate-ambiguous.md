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

You get this error when you try to iterate over a [`JsonDocument`](/v6/api/jsondocument/) or a [`JsonVariant`](/v6/api/jsonvariant/).

For example, it happens if you do this:

```c++
for (JsonPair p : doc["config"]) {
  // ...
}
```

Indeed, you cannot iterate a [`JsonVariant`](/v6/api/jsonvariant/) like so because there is an ambiguity: the [`JsonVariant`](/v6/api/jsonvariant/) could point to either an array or an object, and this information is only available at runtime.

For this reason, we need to tell the compiler which type of structure we expect by casting the [`JsonVariant`](/v6/api/jsonvariant/) to a [`JsonArray`](/v6/api/jsonarray/) or [`JsonObject`](/v6/api/jsonobject/).
For example, we could solve the above snippet like so:

```c++
for (JsonPair p : doc["config"].as<JsonObject>()) {
  // ...
}
```

Did this solve your issue?