---
choices:
  - id: success
    label: "Yes"
    summary: Increasing the timeout fixes the issue
    next: done
  - id: timeout-increased
    label: "No"
    summary: Increasing the timeout doesn't fix the issue
    next: deadend
---

[`EmptyInput`](/v6/api/misc/deserializationerror/#emptyinput) could be caused by a timeout while reading the response.

Please increase the value of the timeout by calling {% include links/arduino/stream_settimeout %} before calling [`deserializeJson()`](/v6/api/json/deserializejson/). For example:

```c++
client.setTimeout(10000);  // 10 seconds
```

Did this solve your issue?