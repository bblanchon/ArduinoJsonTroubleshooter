---
options:
  success:
    label: "Yes"
    summary: Extending the lifetime of the `JsonDocument` solves the issue
    page: /done.md
  not-destroyed:
    label: "No"
    summary: Extending the lifetime of the `JsonDocument` doesn't solve the issue
    page: document.md
---

[`JsonObject`](/v7/api/jsonobject/) doesn't contain any data: it is a reference to an object stored in the [`JsonDocument`](/v7/api/jsondocument/). It becomes invalid as soon as the [`JsonDocument`](/v7/api/jsondocument/) is destroyed; this could explain the garbage you see in the output.

For example, here is a function that creates a dangling [`JsonObject`](/v7/api/jsonobject/):

```c++
// DON'T DO THAT!!!  💀
JsonObject createObject() {
  JsonDocument doc;
  JsonObject obj = doc.to<JsonObject>();
  obj["hello"] = "world";
  return obj;
}
```

The [`JsonObject`](/v7/api/jsonobject/) returned by this function points to a destructed [`JsonDocument`](/v7/api/jsondocument/), and therefore is likely to produce garbage or crash the program.

The best way to fix this function is to return the [`JsonDocument`](/v7/api/jsondocument/):

```c++
JsonDocument createObject() {
  JsonDocument doc;
  JsonObject obj = doc.to<JsonObject>();
  obj["hello"] = "world";
  return doc;
}
```

Did this solve your issue?
