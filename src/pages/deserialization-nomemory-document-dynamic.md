---
choices:
  - id: capacity-0
    label: "`0`"
    summary: "`doc.capacity()` returns `0`"
    next: deserialization-nomemory-document-dynamic-toobig
  - id: capacity-ok
    label: The value passed to the constructor of `DynamicJsonDocument`
    summary: "`doc.capacity()` returns the right value"
    next: deserialization-nomemory-assistant-settings
---

It's possible that the [`DynamicJsonDocument`]({% link v6/api/dynamicjsondocument/index.md %}) failed to allocate the memory pool.

Please print the capacity of the [`DynamicJsonDocument`]({% link v6/api/dynamicjsondocument/index.md %}) to the serial port, like so:

```c++
Serial.println(doc.capacity());
```

What value does it show?