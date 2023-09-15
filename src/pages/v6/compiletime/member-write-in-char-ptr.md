---
options:
  success:
    label: "Yes"
    summary: Passing the buffer size to `serializeJson()` fixed the issue
    page: /done.md
  failure:
    label: "No"
    summary: Passing the buffer size to `serializeJson()` didn't fix the issue
    page: /deadend.md
---

This error occurs when you pass a `char*` to [`serializeJson()`](/v6/api/json/serializejson/) but forget to pass the third argument.
For example:

```c++
serializeJson(doc, ptr);  // request for member 'write' in ..., which is of non-class type 'char*' 
```

To fix this error, you must pass the size of the destination buffer as the third argument, like so:

```c++
serializeJson(doc, ptr, size);  // OK
```

In the examples, you may have seen that I didn't use the size argument; that's because the second argument was not a `char*` but a `char[N]`, and [`serializeJson()`](/v6/api/json/serializejson/) was able to infer the value of `N` from the type.

Did this solve your issue?
