---
options:
  success:
    label: "Yes"
    summary: Iterating fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Iterating doesn't fix the issue
    page: /deadend.md
---

This error occurs when you index a `JsonObject` with an integer instead of a string.

For example, it happens with the following code:

```c++
int i = 0;
auto value = obj[i];
```

The compiler generates an error similar to this one:

```text
error: 'equals' is not a member of 'ArduinoJson::Internals::StringTraits<const int&, void>'
```

Indeed, a `JsonObject` can only be indexed by a string, like this:

```c++
const char* key = "key";
auto value = obj[key];
```

If you do need to access the members of the `JsonObject` one by one, consider iterating over the key-value pairs:

```c++
for (JsonPair& kv : obj) {
    Serial.println(kv.key);
    Serial.println(kv.value.as<char*>());
}
```

Did this solve your issue?
