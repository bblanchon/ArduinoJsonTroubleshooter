---
options:
  before:
    label: "None: program crashes before calling `deserializeJson()`"
    page: before.md
    summary: "Program crashes before calling `deserializeJson()`"
  inside:
    label: "Only one: program crashes inside `deserializeJson()`"
    page: inside.md
    summary: "Program crashes inside `deserializeJson()`"
  after:
    label: "Two traces: program crashes after calling `deserializeJson()`"
    page: after/index.md
    summary: "Program crashes after calling `deserializeJson()`"
---

I need to know for sure if the program crashes before or after calling `deserializeJson()`.

Please add some traces around the call to `deserializeJson()` and make sure to flush the Serial buffer. You can use the [ArduinoTrace library](https://github.com/bblanchon/ArduinoTrace), like so:

```c++
TRACE();
DeserializationError err = deserializeJson(doc, input);
TRACE();
```

How many traces can you see in the Serial Monitor?
