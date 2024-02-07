---
options:
  success:
    label: "Yes"
    summary: Initializing the array fixes the issue
    page: /done.md
  server-ok:
    label: "No"
    summary: Initializing the array doesn't fix the issue
    page: ../../overflowed/index.md
---


You can pass a `JsonArray` as the first argument of `deserializeJson()`, but it has to point to an existing array.

For example, the following code fails because the `JsonArray` is null:

```cpp
JsonDocument doc;
JsonArray array = doc["values"];  // array is null
deserializeJson(array, "[1,2,3]");  // returns NoMemory
```

To fix this issue, you need to explicitly create the array:

```cpp
JsonDocument doc;
JsonArray array = doc["values"].to<JsonArray>();  // create the array
deserializeJson(array, "[1,2,3]");  // returns Ok
// Now, doc contains {"values":[1,2,3]}
```

Note that you can simplify the code by passing the `MemberProxy` directly to `deserializeJson()`:

```cpp
JsonDocument doc;
deserializeJson(doc["values"], "[1,2,3]");  // returns Ok
// Now, doc contains {"values":[1,2,3]}
```

Did this solve your issue?
