---
options:
  capacity-0:
    label: "`0`"
    summary: "`doc.capacity()` returns `0`"
    page: document-dynamic-toobig.md
  capacity-ok:
    label: The value passed to the constructor of `DynamicJsonDocument`
    summary: "`doc.capacity()` returns the right value"
    page: assistant-settings.md
---

It's possible that the [`DynamicJsonDocument`](/v6/api/dynamicjsondocument/) failed to allocate the memory pool.

Please print the capacity of the [`DynamicJsonDocument`](/v6/api/dynamicjsondocument/) to the serial port, like so:

```c++
Serial.println(doc.capacity());
```

What value does it show?