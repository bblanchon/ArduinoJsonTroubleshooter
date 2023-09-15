---
options:
  capacity-0:
    label: "`0`"
    summary: "`doc.capacity()` returns `0`"
    page: static-nomemory-capacity-0.md
  capacity-ok:
    label: The value passed to the constructor of `DynamicJsonDocument`
    summary: "`doc.capacity()` returns the right value"
    page: static-nomemory-capacity-ok.md
---

It looks like the allocation failed.

Please print the capacity of the [`DynamicJsonDocument`](/v6/api/dynamicjsondocument/) to the serial port, like so:

```c++
Serial.println(doc.capacity());
```

What value does it show?
