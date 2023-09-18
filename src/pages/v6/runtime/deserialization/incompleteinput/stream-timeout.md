---
options:
  success:
    label: "Yes"
    summary: Inreasing the timeout solves the issue
    page: /done.md
  timeout-increased:
    label: "No"
    summary: Inreasing the timeout doesn't solve the issue
    page: stream-buffer.md
    
---

[`IncompleteInput`](/v6/api/misc/deserializationerror/#incompleteinput) can be caused by a timeout.

Please increase the value of the timeout by calling [`Stream::setTimeout()`](https://www.arduino.cc/reference/en/language/functions/communication/stream/streamsettimeout/) before calling [`deserializeJson()`](/v6/api/json/deserializejson/). For example:

```c++
stream.setTimeout(10000);  // 10 seconds
```

Did this solve your issue?