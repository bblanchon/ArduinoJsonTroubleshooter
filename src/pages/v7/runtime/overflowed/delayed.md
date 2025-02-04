---
options:
  leak:
    label: Free RAM is going down
    summary: Free RAM decreases over time.
    page: leak.md
  fragmentation:
    label: Max allocation size is going down
    summary: Max allocation size decreases over time.
    page: fragmentation.md
  neither:
    label: Neither is going down
    summary: Neither free RAM nor max allocation size decreases over time.
    page: /deadend.md
---

When a memory issue happens after a while, it's usually because of a memory leak or heap fragmentation.  
Let's do a little experiment to find out which one it is.

Monitor the free memory and the maximum allocation size to see if they decrease over time.  
For example, on ESP32, print `ESP.getFreeHeap()` and `ESP.getMaxAllocHeap()` to the serial port and plot the results.

What do you see?
