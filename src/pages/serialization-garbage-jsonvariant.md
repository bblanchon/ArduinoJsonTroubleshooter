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

[`JsonVariant`]({% link v6/api/jsonvariant/index.md %}) doesn't contain any data: it is a reference to an object stored in the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}). It becomes invalid as soon as the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) is destroyed; this could explain the garbage you see in the output.

For example, here is a function that creates a dangling [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}):

```c++
// DON'T DO THAT!!!  💀
JsonVariant createVariant() {
  StaticJsonDocument<200> doc;
  JsonVariant var = doc.to<JsonVariant>();
  var["hello"] = "world";
  return var;
}
```

The [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}) returned by this function points to a destructed [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), and therefore is likely to produce garbage or crash the program.

The best way to fix this function is to pass the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) as an argument:

```c++
JsonVariant createVariant(JsonDocument& doc) {
  JsonVariant var = doc.to<JsonVariant>();
  var["hello"] = "world";
  return var;
}
```

This way, you can keep the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) alive when you call [`serializeJson()`]({% link v6/api/json/serializejson.md %})

Did this solve your issue?