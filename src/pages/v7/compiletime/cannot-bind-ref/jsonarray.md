---
options:
  success:
    label: "Yes"
    summary: Replacing `JsonArray&` with `JsonArray` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `JsonArray&` with `JsonArray` doesn't fix the issue
    page: /deadend.md
---

A `JsonArray`  should always be passed by value, not by reference. In you program, there is a `JsonArray&` that you must replace with `JsonArray`.

For example:

```diff
- JsonArray& arr = doc["key"];
+ JsonArray arr = doc["key"];
```

or:

```diff
- void foo(JsonArray& arr) {
+ void foo(JsonArray arr) {
    ...
  }
```

Did this solve your issue?
