---
options:
  success:
    label: "Yes"
    summary: Using a `DynamicJsonDocument`/`StaticJsonDocument` solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Using a `DynamicJsonDocument`/`StaticJsonDocument` doesn't solve the issue
    page: /deadend.md
---

This error occurs when you declare a variable of type [`JsonDocument`](/v7/api/jsondocument/), like so:

```c++
JsonDocument doc;
```

Indeed, in ArduinoJson 6, [`JsonDocument`](/v7/api/jsondocument/) is a base class that cannot be instantiated.
Instead, you must use one of the derived classes:

- [`DynamicJsonDocument`](/v7/api/dynamicjsondocument/) for a memory pool on the heap
- [`StaticJsonDocument`](/v7/api/staticjsondocument/) for a memory pool on the stack

In both cases, you must specify the capacity of the memory pool, like so:

```c++
DynamicJsonDocument doc(1024);
// or
StaticJsonDocument<1024> doc;
```

Please use the [ArduinoJson Assistant](/v7/assistant/) to find the right capacity for your application.

Did this solve your issue?
