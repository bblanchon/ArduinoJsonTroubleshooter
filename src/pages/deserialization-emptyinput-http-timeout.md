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

[`EmptyInput`]({% link v6/api/misc/deserializationerror.md %}#emptyinput) could be caused by a timeout while reading the response.

Please increase the value of the timeout by calling {% include links/arduino/stream_settimeout %} before calling [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}). For example:

```c++
client.setTimeout(10000);  // 10 seconds
```

Did this solve your issue?