---
choices:
  - id: crash-with-char-array
    label: "Yes"
    summary: Replacing the output pointer with an array doesn't fix the crash
    next: /deadend
  - id: no-crash-with-char-array
    label: "No"
    summary: Replacing the output pointer with an array fixes the crash
    next: /done
---

I think the output pointer is dangling.

Please try to use a `char[]` instead:

```c++
char output[128];
serializeJson(doc, output);
```

Does your program still crash?