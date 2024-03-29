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

This error occurs when you declare a variable of type `JsonDocument`, like so:

```c++
JsonDocument doc;
```

Indeed, in ArduinoJson 6, `JsonDocument` is a base class that cannot be instantiated.
Instead, you must use one of the derived classes:

- `DynamicJsonDocument` for a memory pool on the heap
- `StaticJsonDocument` for a memory pool on the stack

In both cases, you must specify the capacity of the memory pool, like so:

```c++
DynamicJsonDocument doc(1024);
// or
StaticJsonDocument<1024> doc;
```

Please use the [ArduinoJson Assistant](/v6/assistant/) to find the right capacity for your application.

Did this solve your issue?
