---
options:
  success:
    label: "Yes"
    summary: Reconfiguring the ArduinoJson Assistant solves the issue
    page: /done.md
  still-wrong:
    label: "No"
    summary: Reconfiguring the ArduinoJson Assistant doesn't solve the issue.
    page: /deadend.md
---

The ArduinoJson Assistant suggested a too small capacity because you didn't configure it properly.

Here are the things to watch for:

1. the processor type in step 1
2. the tweaks in step 3, and "Assume keys are const char* in particular

Did this solve your issue?
