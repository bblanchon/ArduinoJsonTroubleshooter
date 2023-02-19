---
options:
  - id: capacity-0
    label: "`0`"
    summary: "`doc.capacity()` returns `0`"
    page: document-basic-capacity-0.md
  - id: capacity-ok
    label: The value passed to the constructor of `DynamicJsonDocument`
    summary: "`doc.capacity()` returns the right value"
    page: assistant-settings.md
---

Let's verify that the memory allocation succeeded.

Please print the capacity of the [`JsonDocument`](/v6/api/jsondocument/) to the serial port, like so:

```c++
Serial.println(doc.capacity());
```

What value does it show?