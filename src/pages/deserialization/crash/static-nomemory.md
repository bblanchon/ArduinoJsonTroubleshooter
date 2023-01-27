---
choices:
  - id: capacity-0
    label: "`0`"
    summary: "`doc.capacity()` returns `0`"
    next: /deserialization/crash/static-nomemory-capacity-0
  - id: capacity-ok
    label: The value passed to the constructor of `DynamicJsonDocument`
    summary: "`doc.capacity()` returns the right value"
    next: /deserialization/crash/static-nomemory-capacity-ok
---

It looks like the allocation failed.

Please print the capacity of the [`DynamicJsonDocument`](/v6/api/dynamicjsondocument/) to the serial port, like so:

```c++
Serial.println(doc.capacity());
```

What value does it show?