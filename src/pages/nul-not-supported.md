---
choices:
  - id: success
    label: "Yes"
    summary: Using `JsonString` solves the issue
    next: done
  - id: failure
    label: "No"
    summary: Using `JsonString` doesn't solves the issue
    next: deadend
---

First, ArduinoJson only supports NUL characters since [version 6.19]({% link _posts/2022-01-08-arduinojson-6-19-0.md %}), so make sure you are up-to-date.

Next, the Arduino {% include links/arduino/string/class %} class doesn't support NUL characters, so you have to use another string type, like [`JsonString`]({% link v6/api/jsonstring/index.md %}), like this:

```c++
JsonString myString = doc["myString"];
const char* myStringData = myString.c_str();
size_t myStringSize = myString.size();
```

Did this solve your issue?