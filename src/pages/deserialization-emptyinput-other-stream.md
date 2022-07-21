---
choices:
  - id: zero
    label: "`0`"
    summary: The first character is NUL
    next: deserialization-emptyinput-other-nul
  - id: non-zero
    label: Something else
    summary: The first character is not NUL
    next: deadend
---

Please print the ASCII code for the first character, like so:

```c++
Serial.println(stream.peek());
```

What do you see?