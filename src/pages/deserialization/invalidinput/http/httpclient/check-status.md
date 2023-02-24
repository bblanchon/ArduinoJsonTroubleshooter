---
options:
  - id: ok
    label: "`200`"
    summary: The status code is `200`
    page: read-method.md
  - id: positive
    label: A positive number (but not `200`)
    summary: The status code is positive 
    page: status-positive.md
  - id: negative
    label: A negative number
    summary: The status code is negative
    page: status-negative.md
---

Please check the status code like so:

```c++
int status = http.GET();

Serial.print("Status code = ");
Serial.println(status);
```

What do you get?