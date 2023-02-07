---
options:
  - id: zero
    label: "`0`"
    summary: The first character is NUL
    next: other-nul
  - id: non-zero
    label: Something else
    summary: The first character is not NUL
    next: /deadend
---

Please print the ASCII code for the first character, like so:

```c++
Serial.println((int)input[0]);
```

What do you see?