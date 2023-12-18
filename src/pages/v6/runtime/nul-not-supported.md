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

First, ArduinoJson only supports NUL characters since [version 6.19](/news/2022/01/08/arduinojson-6-19-0/), so make sure you are up-to-date.

Next, the Arduino [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) class doesn't support NUL characters, so you have to use another string type, like `JsonString`, like this:

```c++
JsonString myString = doc["myString"];
const char* myStringData = myString.c_str();
size_t myStringSize = myString.size();
```

Did this solve your issue?
