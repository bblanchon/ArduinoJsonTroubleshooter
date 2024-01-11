---
options:
  success:
    label: "Yes"
    summary: Replacing `add<JsonObject>()` with `createNestedObject()` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `add<JsonObject>()` with `createNestedObject()` doesn't fix the issue
    page: /deadend.md
---

`add<JsonObject>()` is the new syntax introduced in ArduinoJson 7 to replace `createNestedObject()`.
It's not available in ArduinoJson 6.

To fix this error, you must replace `add<JsonObject>()` with `createNestedObject()`, like so:

```diff
- JsonObject object = array.add<JsonObject>();
+ JsonObject object = array.createNestedObject();
```

Did this solve your issue?
