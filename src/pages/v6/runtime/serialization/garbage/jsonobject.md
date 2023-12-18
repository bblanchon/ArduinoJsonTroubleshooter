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

`JsonObject` doesn't contain any data: it is a reference to an object stored in the `JsonDocument`. It becomes invalid as soon as the `JsonDocument` is destroyed; this could explain the garbage you see in the output.

For example, here is a function that creates a dangling `JsonObject`:

```c++
// DON'T DO THAT!!!  💀
JsonObject createObject() {
  StaticJsonDocument<200> doc;
  JsonObject obj = doc.to<JsonObject>();
  obj["hello"] = "world";
  return obj;
}
```

The `JsonObject` returned by this function points to a destructed `JsonDocument`, and therefore is likely to produce garbage or crash the program.

The best way to fix this function is to pass the `JsonDocument` as an argument:

```c++
JsonObject createObject(JsonDocument& doc) {
  JsonObject obj = doc.to<JsonObject>();
  obj["hello"] = "world";
  return obj;
}
```

This way, you can keep the `JsonDocument` alive when you call `serializeJson()`

Did this solve your issue?
