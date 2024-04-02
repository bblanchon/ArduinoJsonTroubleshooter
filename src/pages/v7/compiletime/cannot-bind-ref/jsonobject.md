---
options:
  success:
    label: "Yes"
    summary: Replacing `JsonObject&` with `JsonObject` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `JsonObject&` with `JsonObject` doesn't fix the issue
    page: /deadend.md
---

A `JsonObject`  should always be passed by value, not by reference. In you program, there is a `JsonObject&` that you must replace with `JsonObject`.

For example:

```diff
- JsonObject& obj = doc["key"];
+ JsonObject obj = doc["key"];
```

or:

```diff
- void foo(JsonObject& obj) {
+ void foo(JsonObject obj) {
    ...
  }
```

Did this solve your issue?
