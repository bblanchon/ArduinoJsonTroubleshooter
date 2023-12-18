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

`JsonArray` doesn't contain any data: it is a reference to an object stored in the `JsonDocument`. It becomes invalid as soon as the `JsonDocument` is destroyed; this could explain the garbage you see in the output.

For example, here is a function that creates a dangling `JsonArray`:

```c++
// DON'T DO THAT!!!  💀
JsonArray createArray() {
  JsonDocument doc;
  JsonArray arr = doc.to<JsonArray>();
  arr.add("hello");
  arr.add("world");
  return arr;
}
```

The `JsonArray` returned by this function points to a destructed `JsonDocument`, and therefore is likely to produce garbage or crash the program.

The best way to fix this function is to return the `JsonDocument`:

```c++
JsonDocument createArray() {
  JsonDocument doc;
  JsonArray arr = doc.to<JsonArray>();
  arr.add("hello");
  arr.add("world");
  return doc;
}
```

Did this solve your issue?
