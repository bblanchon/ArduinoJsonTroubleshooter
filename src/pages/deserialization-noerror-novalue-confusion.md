---
choices:
  - id: success
    label: "Yes"
    summary: Issue is a confusion between array and object
    next: done
  - id: array-object
    label: "No"
    summary: Issue is not a confusion between array and object
    next: deadend
---

When a program fails to extract the values from a [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), it's often because there is a confusion between arrays and objects.

For example, a common mistake is to write:

```c++
const char* temperature = doc["list"]["main"]["temp"];
```

instead of

```c++
const char* temperature = doc["list"][0]["main"]["temp"];
```

You can find other examples in [deserializeJson() succeeds but I cannot read any value]({% link v6/issues/cannot-get-values.md %}), but the simplest solution is to use the [ArduinoJson Assistant]({% link v6/assistant/index.html %}) because the last step shows how to extract the values.

Did this solve your issue?