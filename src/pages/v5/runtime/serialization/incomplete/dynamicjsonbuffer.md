---
options:
  success:
    label: "Yes"
    page: /done.md
    summary: Setting the capacity fixes the issue
  failure:
    label: "No"
    page: /deadend.md
    summary: Setting the capacity doesn't fix the issue
---

Please try to specify the capacity to its constructor; this will reduce the [heap fragmentation](https://cpp4arduino.com/2018/11/06/what-is-heap-fragmentation.html).  
Use the [ArduinoJson Assistant](/v5/assistant/) to compute the right capacity for your JSON output.

Did this solve your issue?
