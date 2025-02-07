---
options:
  success:
    label: "Yes"
    summary: Using an integer or switching to an object fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Neither using an integer nor switching to an object fixes the issue
    page: /deadend.md
---

This error occurs when you pass a string to `JsonArray::operator[]`; i.e., when you use an array like an object.

For example, if you try to compile the following code:

```c++
JsonDocument doc;
JsonArray array = doc.to<JsonArray>();
array["key"] = "value";  // ERROR
```

...you'll get the following error message:

```text
error: assignment of read-only location '*(((const char*)"key") + ((sizetype)array.ArduinoJson::V700L1::JsonArray::operator bool()))'
 array["key"] = "value";  // ERROR
                ^~~~~~~
```

The solution is to use the array correctly or to switch to an object.

So do either this:

```c++
JsonDocument doc;
JsonArray array = doc.to<JsonArray>();
array[0] = "value";
```

...or that:

```c++
JsonDocument doc;
JsonObject obj = doc.to<JsonObject>();
obj["key"] = "value";
```

Did this solve your issue?
