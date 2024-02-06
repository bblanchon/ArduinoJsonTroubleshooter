---
options:
  overflowed-1:
    label: "`1` (or `true`)"
    summary: "`JsonDocument::overflowed()` returns `true`"
    page: ../overflowed/index.md
  overflowed-0:
    label: "`0` (or `false`)"
    summary: "`JsonDocument::overflowed()` returns `false`"
    page: /deadend.md
---

Please print the value of `JsonDocument::overflowed()`, like so:

```c++
Serial.println(doc.overflowed());
```

What value does it print?
