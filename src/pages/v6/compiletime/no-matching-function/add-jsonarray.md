---
options:
  success:
    label: "Yes"
    summary: Replacing `add<JsonArray>()` with `createNestedArray()` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `add<JsonArray>()` with `createNestedArray()` doesn't fix the issue
    page: /deadend.md
---

`add<JsonArray>()` is the new syntax introduced in ArduinoJson 7 to replace `createNestedArray()`.
It's not available in ArduinoJson 6.

To fix this error, you must replace `add<JsonArray>()` with `createNestedArray()`, like so:

```diff
- JsonArray childArray = parentArray.add<JsonArray>();
+ JsonArray childArray = parentArray.createNestedArray();
```

Did this solve your issue?
