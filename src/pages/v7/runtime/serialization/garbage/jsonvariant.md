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

[`JsonVariant`](/v7/api/jsonvariant/) doesn't contain any data: it is a reference to an object stored in the [`JsonDocument`](/v7/api/jsondocument/). It becomes invalid as soon as the [`JsonDocument`](/v7/api/jsondocument/) is destroyed; this could explain the garbage you see in the output.

For example, here is a function that creates a dangling [`JsonVariant`](/v7/api/jsonvariant/):

```c++
// DON'T DO THAT!!!  💀
JsonVariant createVariant() {
  JsonDocument doc;
  JsonVariant var = doc.to<JsonVariant>();
  var["hello"] = "world";
  return var;
}
```

The [`JsonVariant`](/v7/api/jsonvariant/) returned by this function points to a destructed [`JsonDocument`](/v7/api/jsondocument/), and therefore is likely to produce garbage or crash the program.

The best way to fix this function is to return the [`JsonDocument`](/v7/api/jsondocument/):

```c++
JsonVariant createVariant() {
  JsonDocument doc;
  JsonVariant var = doc.to<JsonVariant>();
  var["hello"] = "world";
  return var;
}
```

Did this solve your issue?
