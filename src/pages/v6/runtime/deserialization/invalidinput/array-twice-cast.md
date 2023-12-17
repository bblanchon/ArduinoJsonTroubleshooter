---
options:
  success:
    label: "Yes"
    summary: Casting the pointer fixes the issue
    page: /done.md
  cast:
    label: "No"
    summary: Casting the pointer doesn't fix the issue
    page: string-jsonlint.md
---

If you must keep the two calls to `deserializeJson()`, you need to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:

```c++
// replace this:
deserializeJson(doc, input, inputSize);

// ...with this:
deserializeJson(doc, (const char*)input, inputSize);
```

Now that the zero-copy mode is disabled, you probably need a larger `JsonDocument`, so don't forget to update the capacity. As usual, use the [ArduinoJson Assistant](/v6/assistant/) to compute the right capacity for your project.

Did this solve your issue?
