---
choices:
  - id: success
    label: "Yes"
    summary: Extending the lifetime of the `JsonDocument` solves the issue
    next: done
  - id: not-destroyed
    label: "No"
    summary: Extending the lifetime of the `JsonDocument` doesn't solve the issue
    next: serialization-garbage-reference
---

[`JsonObject`]({% link v6/api/jsonobject/index.md %}) doesn't contain any data: it is a reference to an object stored in the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}). It becomes invalid as soon as the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) is destroyed; this could explain the garbage you see in the output.

For example, here is a function that creates a dangling [`JsonObject`]({% link v6/api/jsonobject/index.md %}):

```c++
// DON'T DO THAT!!!  💀
JsonObject createObject() {
  StaticJsonDocument<200> doc;
  JsonObject obj = doc.to<JsonObject>();
  obj["hello"] = "world";
  return obj;
}
```

The [`JsonObject`]({% link v6/api/jsonobject/index.md %}) returned by this function points to a destructed [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), and therefore is likely to produce garbage or crash the program.

The best way to fix this function is to pass the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) as an argument:

```c++
JsonObject createObject(JsonDocument& doc) {
  JsonObject obj = doc.to<JsonObject>();
  obj["hello"] = "world";
  return obj;
}
```

This way, you can keep the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) alive when you call [`serializeJson()`]({% link v6/api/json/serializejson.md %})

Did this solve your issue?