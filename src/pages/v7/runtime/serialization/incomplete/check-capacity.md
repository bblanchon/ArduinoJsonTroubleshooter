---
options:
  capacity-zero:
    label: "`0`"
    summary: "`JsonDocument::capacity()` returns `0`"
    page: capacity-0.md
  capacity-nonzero:
    label: A number greater than `0`
    summary: "`JsonDocument::capacity()` returns a number greater than `0`"
    page: /deadend.md
---


Please print the value of [`JsonDocument::capacity()`](/v7/api/jsondocument/capacity/), like so:

```c++
Serial.println(doc.capacity());
```

What value does it print?
