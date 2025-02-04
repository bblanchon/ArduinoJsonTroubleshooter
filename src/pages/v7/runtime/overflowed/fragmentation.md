---
options:
  success:
    label: "Yes"
    summary: Reducing heap fragmentation solves the issue.
    page: /done.md
  failure:
    label: "No"
    summary: The heap fragmentation cannot be reduced.
    page: /deadend.md
---

Your program seems to be a victim of [heap fragmentation](https://cpp4arduino.com/2018/11/06/what-is-heap-fragmentation.html).

Heap fragmentation is when the free memory is split into small blocks, and the largest block is too small to allocate the memory you need.

To fix this, reduce your use of heap-allocated variables, such as `String`.
ArduinoJson 7 is designed to produce little fragmentation, but if in doubt, you can switch back to ArduinoJson 6, which shouldn't produce any fragmentation.

Did this solve your issue?
