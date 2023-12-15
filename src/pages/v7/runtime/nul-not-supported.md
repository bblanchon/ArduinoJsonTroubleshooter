---
options:
  success:
    label: "Yes"
    summary: Using `JsonString` solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Using `JsonString` doesn't solves the issue
    page: /deadend.md
---

The Arduino [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) class doesn't support NUL characters, so you have to use another string type, like [`JsonString`](/v7/api/jsonstring/), like this:

```c++
JsonString myString = doc["myString"];
const char* myStringData = myString.c_str();
size_t myStringSize = myString.size();
```

Did this solve your issue?
