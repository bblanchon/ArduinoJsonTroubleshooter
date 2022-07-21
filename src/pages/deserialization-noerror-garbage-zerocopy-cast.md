---
choices:
  - id: success
    label: "Yes"
    summary: Casting the pointer fixes the issue
    next: done
  - id: cast
    label: "No"
    summary: Casting the pointer doesn't fix the issue
    next: deadend
---

The easiest solution is to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:

```c++
// replace this:
deserializeJson(doc, input, inputSize);

// ...with this:
deserializeJson(doc, (const char*)input, inputSize);
```

Now that the zero-copy mode is disabled, you probably need a larger [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), so don't forget to update the capacity. As usual, use the [ArduinoJson Assistant]({% link v6/assistant/index.html %}) to compute the right capacity for your project.

Did this solve your issue?