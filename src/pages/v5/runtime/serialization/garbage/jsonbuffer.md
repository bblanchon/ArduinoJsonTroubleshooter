---
options:
  buffer-ok:
    label: "Yes"
    summary: Passing the JsonBuffer as an argument fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Passing the JsonBuffer as an argument doesn't fix the issue
    page: string-cstr.md
---

Garbage in the output always has the same cause: the `JsonObject` contains pointers to destructed variables.

This problem happens when the `JsonObject` is constructed with variables that are destroyed before the call to `printTo()`

A typical example is the following:

```c++
// DON'T DO THAT!!!
JsonObject& createObject() {
  StaticJsonBuffer<200> jsonBuffer;
  JsonObject& obj = jsonBuffer.createObject();
  obj["hello"] = "world";
  return obj;
}
```

The best way to fix this function is to pass the `JsonBuffer` as an argument:

```c++
template<typename TJsonBuffer>
JsonObject& createObject(TJsonBuffer& jsonBuffer) {
  JsonObject& obj = jsonBuffer.createObject();
  obj["hello"] = "world";
  return obj;
}
```

Note that this function uses a template to allow any kind of `JsonBuffer` to be used, not just `StaticJsonBuffer<200>`.

Did this solve your issue?
