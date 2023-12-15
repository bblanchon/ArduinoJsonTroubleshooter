---
options:
  success:
    label: "Yes"
    summary: Increasing the timeout fixes the issue
    page: /done.md
  timeout-increased:
    label: "No"
    summary: Increasing the timeout doesn't fix the issue
    page: curl.md
---

[`EmptyInput`](/v7/api/misc/deserializationerror/#emptyinput) could be caused by a timeout while reading the response.

Please increase the value of the timeout by calling [`Stream::setTimeout()`](https://www.arduino.cc/reference/en/language/functions/communication/stream/streamsettimeout/) before calling [`deserializeJson()`](/v7/api/json/deserializejson/). For example:

```c++
client.setTimeout(10000);  // 10 seconds
```

Did this solve your issue?