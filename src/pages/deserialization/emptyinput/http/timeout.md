---
options:
  - id: success
    label: "Yes"
    summary: Increasing the timeout fixes the issue
    page: /done.md
  - id: timeout-increased
    label: "No"
    summary: Increasing the timeout doesn't fix the issue
    page: /deadend.md
---

[`EmptyInput`](/v6/api/misc/deserializationerror/#emptyinput) could be caused by a timeout while reading the response.

Please increase the value of the timeout by calling [`Stream::setTimeout()`](https://www.arduino.cc/reference/en/language/functions/communication/stream/streamsettimeout/) before calling [`deserializeJson()`](/v6/api/json/deserializejson/). For example:

```c++
client.setTimeout(10000);  // 10 seconds
```

Did this solve your issue?