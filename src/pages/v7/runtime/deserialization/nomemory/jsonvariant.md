---
options:
  success:
    label: "Yes"
    summary: Initializing the variant fixes the issue
    page: /done.md
  server-ok:
    label: "No"
    summary: Initializing the variant doesn't fix the issue
    page: ../../overflowed/index.md
---


You can pass a `JsonVariant` as the first argument of `deserializeJson()`, but it has to point to an existing value.

For example, the following code fails because the `JsonVariant` is null:

```cpp
JsonDocument doc;
JsonVariant variant = doc["values"];  // variant is null
deserializeJson(variant, "[1,2,3]");  // returns NoMemory
```

To fix this issue, you need to explicitly create the variant:

```cpp
JsonDocument doc;
JsonVariant variant = doc["values"].to<JsonVariant>();  // create the variant
deserializeJson(variant, "[1,2,3]");  // returns Ok
// Now, doc contains {"values":[1,2,3]}
```

Note that you can simplify the code by passing the `MemberProxy` directly to `deserializeJson()`:

```cpp
JsonDocument doc;
deserializeJson(doc["values"], "[1,2,3]");  // returns Ok
// Now, doc contains {"values":[1,2,3]}
```

Did this solve your issue?
