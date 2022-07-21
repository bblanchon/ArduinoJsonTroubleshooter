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

[`JsonArray`]({% link v6/api/jsonarray/index.md %}) doesn't contain any data: it is a reference to an object stored in the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}). It becomes invalid as soon as the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) is destroyed; this could explain the garbage you see in the output.

For example, here is a function that creates a dangling [`JsonArray`]({% link v6/api/jsonarray/index.md %}):

```c++
// DON'T DO THAT!!!  💀
JsonArray createArray() {
  StaticJsonDocument<200> doc;
  JsonArray arr = doc.to<JsonArray>();
  arr.add("hello");
  arr.add("world");
  return arr;
}
```

The [`JsonArray`]({% link v6/api/jsonarray/index.md %}) returned by this function points to a destructed [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), and therefore is likely to produce garbage or crash the program.

The best way to fix this function is to pass the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) as an argument:

```c++
JsonArray createArray(JsonDocument& doc) {
  JsonArray arr = doc.to<JsonArray>();
  arr.add("hello");
  arr.add("world");
  return arr;
}
```

This way, you can keep the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) alive when you call [`serializeJson()`]({% link v6/api/json/serializejson.md %})

Did this solve your issue?