---
choices:
  - id: capacity-0
    label: "`0`"
    summary: "`doc.capacity()` returns `0`"
    next: serialization-empty-capacity-0
  - id: capacity-ok
    label: "a positive integer"
    summary: "`doc.capacity()` looks good"
    next: deadend
---

Please print the capacity of the [`JsonDocument`](/v6/api/jsondocument/) to the serial port, like so:

```c++
Serial.println(doc.capacity());
```

What value does it show?