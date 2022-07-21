---
choices:
  - id: success
    label: "Yes"
    summary: Inreasing the timeout solves the issue
    next: done
  - id: timeout-increased
    label: "No"
    summary: Inreasing the timeout doesn't solve the issue
    next: deserialization-incompleteinput-stream-buffer
    
---

[`IncompleteInput`]({% link v6/api/misc/deserializationerror.md %}#incompleteinput) can be caused by a timeout.

Please increase the value of the timeout by calling {% include links/arduino/stream_settimeout %} before calling [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}). For example:

```c++
stream.setTimeout(10000);  // 10 seconds
```

Did this solve your issue?