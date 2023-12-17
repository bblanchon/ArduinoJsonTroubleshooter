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

`JsonVariant` doesn't contain any data: it is a reference to an object stored in the `JsonDocument`. It becomes invalid as soon as the `JsonDocument` is destroyed; this could explain the garbage you see in the output.

For example, here is a function that creates a dangling `JsonVariant`:

```c++
// DON'T DO THAT!!!  💀
JsonVariant createVariant() {
  StaticJsonDocument<200> doc;
  JsonVariant var = doc.to<JsonVariant>();
  var["hello"] = "world";
  return var;
}
```

The `JsonVariant` returned by this function points to a destructed `JsonDocument`, and therefore is likely to produce garbage or crash the program.

The best way to fix this function is to pass the `JsonDocument` as an argument:

```c++
JsonVariant createVariant(JsonDocument& doc) {
  JsonVariant var = doc.to<JsonVariant>();
  var["hello"] = "world";
  return var;
}
```

This way, you can keep the `JsonDocument` alive when you call `serializeJson()`

Did this solve your issue?
