---
options:
  - id: success
    label: "Yes"
    summary: Passing the capacity to the constructor fixes the issue
    page: /done.md
  - id: failure
    label: "No"
    summary: Passing the capacity to the constructor doesn't fix the issue
    page: /deadend.md
---

This error occurs when you forget to pass the capacity to the constructor of [`DynamicJsonDocument`](/v6/api/dynamicjsondocument/), like so:

```c++
DynamicJsonDocument doc;
```

Instead, you need to specify the capacity of the memory pool, like so:

```c++
DynamicJsonDocument doc(2048);
```

As usual, you can use the [ArduinoJson Assistant](/v6/assistant/) to compute the right capacity for your project.

For more information, please read [no matching function for call to 'BasicJsonDocument::BasicJsonDocument()'](/v6/error/no-matching-function-for-call-to-basicjsondocument-basicjsondocument/).

Did this solve your issue?
