---
options:
  - id: size-ok
    label: "Yes"
    summary: The filter looks correct
    page: assistant.md
  - id: too-small
    label: No, some values are missing
    summary: The filter lacks some values
    page: too-small.md
---

Please print the filter to the serial port like so:

```c++
serializeJsonPretty(filter, Serial);
```

Does the filter look as you expected?