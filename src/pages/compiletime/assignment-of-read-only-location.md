---
choices:
  - id: success
    label: "Yes"
    summary: Using an integer or switching to an object fixes the issue
    next: done
  - id: failure
    label: "No"
    summary: Neither using an integer nor switching to an object fixes the issue
    next: deadend
---

This error occurs when you pass a string to [`JsonArray::operator[]`](/v6/api/jsonarray/subscript/); i.e., when you use an array like an object.

For example, if you try to compile the following code:

```c++
StaticJsonDocument<128> doc;
JsonArray array = doc.createNestedArray("array");
array["key"] = "value";  // ERROR
```

...you'll get the following error message:

```text
error: assignment of read-only location '*(((const char*)"key") + ((sizetype)data.ArduinoJson6194_F1::ArrayRef::<anonymous>.ArduinoJson6194_F1::ArrayRefBase<ArduinoJson6194_F1::CollectionData>::operator bool()))'
   38 |   data["key"] = "value";
      |   ~~~~~~~~~~~~^~~~~~~~~
```

The solution is to use the array correctly or to switch to an object.

So do either this:

```c++
StaticJsonDocument<128> doc;
JsonArray array = doc.createNestedArray("array");
array[0] = "value";
```

...or that:

```c++
StaticJsonDocument<128> doc;
JsonArray obj = doc.createNestedObject("obj");
obj["key"] = "value";
```

Did this solve your issue?