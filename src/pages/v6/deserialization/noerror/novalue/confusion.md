---
options:
  success:
    label: "Yes"
    summary: Issue is a confusion between array and object
    page: /done.md
  array-object:
    label: "No"
    summary: Issue is not a confusion between array and object
    page: /deadend.md
---

When a program fails to extract the values from a [`JsonDocument`](/v6/api/jsondocument/), it's often because there is a confusion between arrays and objects.

For example, a common mistake is to write:

```c++
const char* temperature = doc["list"]["main"]["temp"];
```

instead of

```c++
const char* temperature = doc["list"][0]["main"]["temp"];
```

You can find other examples in [deserializeJson() succeeds but I cannot read any value](/v6/issues/cannot-get-values/), but the simplest solution is to use the [ArduinoJson Assistant](/v6/assistant/) because the last step shows how to extract the values.

Did this solve your issue?
