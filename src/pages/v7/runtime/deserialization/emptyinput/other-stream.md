---
options:
  zero:
    label: "`0`"
    summary: The first character is NUL
    page: other-nul.md
  non-zero:
    label: Something else
    summary: The first character is not NUL
    page: /deadend.md
---

Please print the ASCII code for the first character, like so:

```c++
Serial.println(stream.peek());
```

What do you see?
