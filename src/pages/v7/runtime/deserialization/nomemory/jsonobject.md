---
options:
  success:
    label: "Yes"
    summary: Initializing the object fixes the issue
    page: /done.md
  server-ok:
    label: "No"
    summary: Initializing the object doesn't fix the issue
    page: ../../overflowed/index.md
---


You can pass a `JsonObject` as the first argument of `deserializeJson()`, but it has to point to an existing object.

For example, the following code fails because the `JsonObject` is null:

```cpp
JsonDocument doc;
JsonObject object = doc["http"];  // object is null
deserializeJson(object, "{\"port\":80}");  // returns NoMemory
```

To fix this issue, you need to explicitly create the object:

```cpp
JsonDocument doc;
Jsonobject object = doc["http"].to<JsonObject>();  // create the object
deserializeJson(object, "{\"port\":80}");  // returns Ok
// Now, doc contains {"http":{"port":80}}
```

Note that you can simplify the code by passing the `MemberProxy` directly to `deserializeJson()`:

```cpp
JsonDocument doc;
deserializeJson(doc["http"], "{\"port\":80}");  // returns Ok
// Now, doc contains {"http":{"port":80}}
```

Did this solve your issue?
