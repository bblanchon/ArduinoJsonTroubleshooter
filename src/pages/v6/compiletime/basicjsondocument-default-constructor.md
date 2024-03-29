---
options:
  success:
    label: "Yes"
    summary: Passing the capacity to the constructor fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Passing the capacity to the constructor doesn't fix the issue
    page: /deadend.md
---

This is a linting error you may have in Visual Studio Code if your program contains something like this:

```c++
DynamicJsonDocument doc;
```

If you try to compile this code, you will get the following error:

```text
no matching function for call to 'ArduinoJson6194_F1::BasicJsonDocument<ArduinoJson6194_F1::DefaultAllocator>::BasicJsonDocument()'
```

These errors occur when you forget to pass the capacity to the constructor of `DynamicJsonDocument`.

To fix them, you must specify the capacity of the memory pool, like so:

```c++
DynamicJsonDocument doc(2048);
```

As usual, you can use the [ArduinoJson Assistant](/v6/assistant/) to compute the right capacity for your project.

For more information, please read [no matching function for call to 'BasicJsonDocument::BasicJsonDocument()'](/v6/error/no-matching-function-for-call-to-basicjsondocument-basicjsondocument/).

Did this solve your issue?
