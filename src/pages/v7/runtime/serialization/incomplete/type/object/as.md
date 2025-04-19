---
options:
  success:
    label: "Yes"
    summary: Replacing `as<JsonObject>()` with `to<JsonObject>()` fixes the issue
    page: /done.md
  to:
    label: "No"
    summary: Replacing `as<JsonObject>()` with `to<JsonObject>()` does not fix the issue
    page: ../../output/index.md
---

`as<JsonObject>()` returns a reference to an existing object but does not create one if it does not exist.  
This function is appropriate when extracting values from a JSON document but not when creating one.

Instead, you must call `to<JsonObject>()`, like so:

```diff
- JsonObject obj = doc["obj"].as<JsonObject>();
+ JsonObject obj = doc["obj"].to<JsonObject>();
```

Did this solve your issue?
