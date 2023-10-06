---
options:
  success:
    label: "Yes"
    summary: Adding `#undef str_` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Adding `#undef str_` doesn't fix the issue
    page: /deadend.md
---

This a known bug in the RAK RUI core for Arduino.
It's tracked in the following issues:

* [RAKWireless/RAK-STM32-RUI#10](https://github.com/RAKWireless/RAK-STM32-RUI/issues/10)
* [RAKWireless/RAK-nRF52-RUI#5](https://github.com/RAKWireless/RAK-nRF52-RUI/issues/5)
* [RAKWireless/RAK-APOLLO3-RUI#2](https://github.com/RAKWireless/RAK-APOLLO3-RUI/issues/2)

You should be able to work around this issue by adding the following line at the beginning of your sketch:

```c++
#undef str_
```

Did this solve this issue?
