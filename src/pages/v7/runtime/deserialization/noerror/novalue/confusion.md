---
options:
  success:
    label: "Yes"
    summary: The issue is confusion between array and object
    page: /done.md
  array-object:
    label: "No"
    summary: The issue is not confusion between array and object
    page: types/index.md
---

When a program fails to extract the values from a `JsonDocument`, it's often because of confusion between arrays and objects.

For example, a common mistake is to write:

```c++
const char* temperature = doc["list"]["main"]["temp"];
```

instead of

```c++
const char* temperature = doc["list"][0]["main"]["temp"];
```

There are many variations on this problem, and I cannot list them all.

The simplest solution is to use the [ArduinoJson Assistant](/v7/assistant/) because the last step shows how to extract the values.

Did this solve your issue?
