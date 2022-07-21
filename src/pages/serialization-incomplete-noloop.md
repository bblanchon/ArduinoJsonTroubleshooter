---
choices:
  - id: overflowed-1
    label: "`1` (or `true`)"
    summary: "`JsonDocument::overflowed()` returns `true`"
    next: serialization-incomplete-overflowed
  - id: overflowed-0
    label: "`0` (or `false`)"
    summary: "`JsonDocument::overflowed()` returns `false`"
    next: serialization-incomplete-nul
---

Please print the value of [`JsonDocument::overflowed()`]({% link v6/api/jsondocument/overflowed.md %}), like so:

```c++
Serial.println(doc.overflowed());
```

What value does it print?