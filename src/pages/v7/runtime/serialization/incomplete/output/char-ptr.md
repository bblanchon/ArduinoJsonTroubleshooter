---
options:
  success:
    label: "Yes"
    summary: Increasing the buffer size solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Increasing the buffer size does not solve the issue
    page: /deadend.md
---
Please make sure that the size of the output buffer is large enough to hold the entire JSON document.
If the buffer is too small, the output will be truncated.

You may use `measureJson()` to determine the required size of the buffer, like so:

```c++
size_t requiredSize = measureJson(doc);
char* buffer = new char[requiredSize];
serializeJson(doc, buffer, requiredSize);
delete[] buffer;
```

Did this solve your issue?
