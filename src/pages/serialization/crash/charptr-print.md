---
options:
  - id: success
    label: "Yes"
    summary: Printing the string reveals the faulty pointer
    page: /done.md
  - id: no-faulty-pointer
    label: "No"
    summary: Printing the string doesn't show any faulty pointer
    page: /deadend.md
---

One of these string pointers is probably dangling or points to a non-zero-terminated string.

Please print them all to the serial port to find the faulty pointer.

```c++
Serial.print(name);
doc["name"] = "name";
```

Can you locate the faulty string in the output?