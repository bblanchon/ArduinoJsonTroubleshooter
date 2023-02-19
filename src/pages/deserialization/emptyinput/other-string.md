---
options:
  - id: zero
    label: "`0`"
    summary: The first character is NUL
    page: other-nul.md
  - id: non-zero
    label: Something else
    summary: The first character is not NUL
    page: /deadend.md
---

Please print the ASCII code for the first character, like so:

```c++
Serial.println((int)input[0]);
```

What do you see?