---
options:
  success:
    label: "Yes"
    summary: Inreasing the timeout solves the issue
    page: /done.md
  timeout-increased:
    label: "No"
    summary: Inreasing the timeout doesn't solve the issue
    page: buffer.md
    
---

`IncompleteInput` can be caused by a timeout.

Please increase the value of the timeout by calling [`Stream::setTimeout()`](https://www.arduino.cc/reference/en/language/functions/communication/stream/streamsettimeout/) before calling `deserializeJson()`. For example:

```c++
stream.setTimeout(10000);  // 10 seconds
```

Did this solve your issue?
