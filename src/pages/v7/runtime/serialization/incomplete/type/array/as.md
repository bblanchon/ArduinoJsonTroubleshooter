---
options:
  success:
    label: "Yes"
    summary: Replacing `as<JsonArray>()` with `to<JsonArray>()` fixes the issue
    page: /done.md
  to:
    label: "No"
    summary: Replacing `as<JsonArray>()` with `to<JsonArray>()` does not fix the issue
    page: ../../output/index.md
---

`as<JsonArray>()` returns a reference to an existing array but does not create one if it does not exist.  
This function is appropriate when extracting values from a JSON document but not when creating one.

Instead, you must call `to<JsonArray>()`, like so:

```diff
- JsonArray array = doc["values"].as<JsonArray>();
+ JsonArray array = doc["values"].to<JsonArray>();
```

Did this solve your issue?
