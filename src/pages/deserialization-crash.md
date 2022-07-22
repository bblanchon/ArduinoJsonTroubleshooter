---
choices:
  - id: before
    label: "None: program crashes before calling `deserializeJson()`"
    next: deserialization-crash-before
    summary: "Program crashes before calling `deserializeJson()`"
  - id: inside
    label: "Only one: program crashes inside `deserializeJson()`"
    next: deserialization-crash-inside
    summary: "Program crashes inside `deserializeJson()`"
  - id: after
    label: "Two traces: program crashes after calling `deserializeJson()`"
    next: deserialization-crash-after
    summary: "Program crashes after calling `deserializeJson()`"
---

I need to know for sure if the program crashes before or after calling [`deserializeJson()`](/v6/api/json/deserializejson/).

Please add some traces around the call to [`deserializeJson()`](/v6/api/json/deserializejson/) and make sure to flush the Serial buffer. You can use the [ArduinoTrace library](https://github.com/bblanchon/ArduinoTrace), like so:

```c++
TRACE();
DeserializationError err = deserializeJson(doc, input);
TRACE();
```

How many traces can you see in the Serial Monitor?