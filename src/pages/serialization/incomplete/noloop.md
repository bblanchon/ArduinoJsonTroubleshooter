---
choices:
  - id: overflowed-1
    label: "`1` (or `true`)"
    summary: "`JsonDocument::overflowed()` returns `true`"
    next: /serialization/incomplete/overflowed
  - id: overflowed-0
    label: "`0` (or `false`)"
    summary: "`JsonDocument::overflowed()` returns `false`"
    next: /serialization/incomplete/nul-char
---

Please print the value of [`JsonDocument::overflowed()`](/v6/api/jsondocument/overflowed/), like so:

```c++
Serial.println(doc.overflowed());
```

What value does it print?