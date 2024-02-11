---
options:
  success:
    label: "Yes"
    summary: Using `as<JsonObject>()` solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Using `as<JsonObject>()` doesn't solve the issue
    page: /deadend.md
---

`to<JsonObject>()` replaces the existing value with a new empty object.

To extract an existing object without replacing it, use `as<JsonObject>()` instead.

```diff
- auto object = doc["key"].to<JsonObject>();
+ auto object = doc["key"].as<JsonObject>();
```

Did this solve your issue?
