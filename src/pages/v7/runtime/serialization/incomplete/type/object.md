---
options:
  success:
    label: "Yes"
    summary: Calling `add<JsonObject>()` or `to<JsonObject>()` fixes the issue
    page: /done.md
  to:
    label: "No"
    summary: Calling `add<JsonObject>()` or `to<JsonObject>()` does not fix the issue
    page: ../output/index.md
---

A missing object is often due to an incorrectly initialized `JsonObject`.  
If your code uses a `JsonObject`, make sure it is returned by `add<JsonObject>` or `to<JsonObject>()`.

If the object is inside an object, you must use `to<JsonObject>()`, like so:

```diff
  JsonDocument doc;
- JsonObject config = doc["config"];
+ JsonObject config = doc["config"].to<JsonObject>();
  config["mode"] = "auto";
  serializeJson(doc, Serial);  // {"config":{"mode":"auto"}}
```

If the object is inside an array, you must use `add<JsonObject>()`, like so:

```diff
  JsonDocument doc;
- JsonObject player = doc["players"][0];
+ JsonObject player = doc["players"].add<JsonObject>();
  player["name"] = "Alice";
  serializeJson(doc, Serial);  // {"players":[{"name":"Alice"}]}
```

(Note that `doc["players"][0].to<JsonObject>()` would work too, but `add<JsonObject>()` is usually more practical.)

Did this solve your issue?
