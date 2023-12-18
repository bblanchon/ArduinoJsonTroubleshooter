---
options:
  success:
    label: "Yes"
    summary: Switching to a `DynamicJsonBuffer` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Switching to a `DynamicJsonBuffer` doesn't fix the issue
    page: allocation-fails.md
---

A `StaticJsonBuffer` is usually allocated on the [stack](https://en.wikipedia.org/wiki/Stack-based_memory_allocation), if it's too big it will overlap with other variables. This usually leads to a crash or a reboot of the device.

If you are in this situation, you can either:

* Reduce the size of the `StaticJsonBuffer`, use [ArduinoJson Assistant](/v5/assistant/) to compute the required size.
* Switch to a `DynamicJsonBuffer` which is allocated on the heap.

For example, a ESP8266 has 4KB of stack memory. This means you only have 4096 bytes to store all your local variables, function parameters and calls return addresses. If the [ArduinoJson Assistant](/v5/assistant/) says you need more than 1KB of RAM for the `JsonBuffer`, then you should use a `DynamicJsonBuffer`.

See also: [How to reduce memory usage?](/v5/faq/how-to-reduce-memory-usage/)

Did this solve your issue?
