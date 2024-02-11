---
options:
  success:
    label: "Yes"
    summary: Using `as<JsonArray>()` solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Using `as<JsonArray>()` doesn't solve the issue
    page: /deadend.md
---

`to<JsonArray>()` replaces the existing value with a new empty array.

To extract an existing array without replacing it, use `as<JsonArray>()` instead.

```diff
- auto array = doc["key"].to<JsonArray>();
+ auto array = doc["key"].as<JsonArray>();
```

Did this solve your issue?
