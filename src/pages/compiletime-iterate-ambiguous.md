---
choices:
  - id: success
    label: "Yes"
    summary: Calling `as<JsonObject>()` or `as<JsonArray>()` solves the issue
    next: done
  - id: failure
    label: "No"
    summary:  Calling `as<JsonObject>()` or `as<JsonArray>()` doesn't solve the issue
    next: deadend
---

You get this error when you try to iterate over a [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) or a [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}).

For example, it happens if you do this:

```c++
for (JsonPair p : doc["config"]) {
  // ...
}
```

Indeed, you cannot iterate a [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}) like so because there is an ambiguity: the [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}) could point to either an array or an object, and this information is only available at runtime.

For this reason, we need to tell the compiler which type of structure we expect by casting the [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}) to a [`JsonArray`]({% link v6/api/jsonarray/index.md %}) or [`JsonObject`]({% link v6/api/jsonobject/index.md %}).
For example, we could solve the above snippet like so:

```c++
for (JsonPair p : doc["config"].as<JsonObject>()) {
  // ...
}
```

Did this solve your issue?