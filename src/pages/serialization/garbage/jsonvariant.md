---
choices:
  - id: success
    label: "Yes"
    summary: Extending the lifetime of the `JsonDocument` solves the issue
    next: /done
  - id: not-destroyed
    label: "No"
    summary: Extending the lifetime of the `JsonDocument` doesn't solve the issue
    next: /serialization/garbage/reference
---

[`JsonVariant`](/v6/api/jsonvariant/) doesn't contain any data: it is a reference to an object stored in the [`JsonDocument`](/v6/api/jsondocument/). It becomes invalid as soon as the [`JsonDocument`](/v6/api/jsondocument/) is destroyed; this could explain the garbage you see in the output.

For example, here is a function that creates a dangling [`JsonVariant`](/v6/api/jsonvariant/):

```c++
// DON'T DO THAT!!!  💀
JsonVariant createVariant() {
  StaticJsonDocument<200> doc;
  JsonVariant var = doc.to<JsonVariant>();
  var["hello"] = "world";
  return var;
}
```

The [`JsonVariant`](/v6/api/jsonvariant/) returned by this function points to a destructed [`JsonDocument`](/v6/api/jsondocument/), and therefore is likely to produce garbage or crash the program.

The best way to fix this function is to pass the [`JsonDocument`](/v6/api/jsondocument/) as an argument:

```c++
JsonVariant createVariant(JsonDocument& doc) {
  JsonVariant var = doc.to<JsonVariant>();
  var["hello"] = "world";
  return var;
}
```

This way, you can keep the [`JsonDocument`](/v6/api/jsondocument/) alive when you call [`serializeJson()`](/v6/api/json/serializejson/)

Did this solve your issue?