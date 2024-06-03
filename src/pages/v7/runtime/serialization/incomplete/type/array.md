---
options:
  success:
    label: "Yes"
    summary: Calling `add<JsonArray>()` or `to<JsonArray>()` fixes the issue
    page: /done.md
  to:
    label: "No"
    summary: Calling `add<JsonArray>()` or `to<JsonArray>()` does not fix the issue
    page: ../output/index.md
---

A missing array is often due to an incorrectly initialized `JsonArray`.  
If your code uses a `JsonArray`, make sure it is returned by `add<JsonArray>` or `to<JsonArray>()`.

If the array is inside an object, you must use `to<JsonArray>()`, like so:

```diff
  JsonDocument doc;
- JsonArray array = doc["values"];
+ JsonArray array = doc["values"].to<JsonArray>();
  array.add(1);
  array.add(2);
  serializeJson(doc, Serial);  // {"values":[1,2]}
```

If the array is inside an array, you must use `add<JsonArray>()`, like so:

```diff
  JsonDocument doc;
- JsonArray array = doc[0];
+ JsonArray array = doc.add<JsonArray>();
  array.add(1);
  array.add(2);
  serializeJson(doc, Serial);  // [[1,2]]
```

(Note that `doc[0].to<JsonArray>()` would work too, but `add<JsonArray>()` is usually more practical.)

Did this solve your issue?
