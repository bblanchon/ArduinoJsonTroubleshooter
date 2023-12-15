---
options:
  success:
    label: "Yes"
    summary: Extending the lifetime of the `JsonDocument` solves the issue
    page: /done.md
  not-destroyed:
    label: "No"
    summary: Extending the lifetime of the `JsonDocument` doesn't solve the issue
    page: reference.md
---

[`JsonObject`](/v7/api/jsonobject/) doesn't contain any data: it is a reference to an object stored in the [`JsonDocument`](/v7/api/jsondocument/). It becomes invalid as soon as the [`JsonDocument`](/v7/api/jsondocument/) is destroyed; this could explain the garbage you see in the output.

For example, here is a function that creates a dangling [`JsonObject`](/v7/api/jsonobject/):

```c++
// DON'T DO THAT!!!  💀
JsonObject createObject() {
  StaticJsonDocument<200> doc;
  JsonObject obj = doc.to<JsonObject>();
  obj["hello"] = "world";
  return obj;
}
```

The [`JsonObject`](/v7/api/jsonobject/) returned by this function points to a destructed [`JsonDocument`](/v7/api/jsondocument/), and therefore is likely to produce garbage or crash the program.

The best way to fix this function is to pass the [`JsonDocument`](/v7/api/jsondocument/) as an argument:

```c++
JsonObject createObject(JsonDocument& doc) {
  JsonObject obj = doc.to<JsonObject>();
  obj["hello"] = "world";
  return obj;
}
```

This way, you can keep the [`JsonDocument`](/v7/api/jsondocument/) alive when you call [`serializeJson()`](/v7/api/json/serializejson/)

Did this solve your issue?