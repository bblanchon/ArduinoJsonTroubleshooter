---
options:
  - id: success
    label: "Yes"
    summary: Adding a wait loop fixes the issue
    next: /done
  - id: available
    label: "No"
    summary:  Adding a wait loop doesn't fix the issue
    next: serial-crlf
---

[`EmptyInput`](/v6/api/misc/deserializationerror/#emptyinput) can be caused by a timeout while waiting for the input.

In that case, the solution is to wait until some data is available before calling [`deserializeJson()`](/v6/api/json/deserializejson/). A simple loop can do the trick:

```c++
// wait from an incomming message
while (Serial.available() == 0)
  delay(100);

deserializeJson(doc, Serial);
```

Did this solve your issue?