---
options:
  success:
    label: "Yes"
    summary: Casting the pointer fixes the issue
    page: /done.md
  cast:
    label: "No"
    summary: Casting the pointer doesn't fix the issue
    page: /deadend.md
---

When you pass a writeable buffer as the input of `deserializeJson()`, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the `JsonDocument`, it stores pointers to the input buffer.

While doing this, the parser modifies the input buffer to unescape special characters and add string terminator.
When `deserializeJson()` returns the input buffer doesn't contain a valid JSON document anymore.

For more information, please see [Why is the input modified?](/v6/issues/altered-input/)

If you must preserve the input as it is, you must disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:

```c++
// replace this:
deserializeJson(doc, input, inputSize);

// ...with this:
deserializeJson(doc, (const char*)input, inputSize);
```

Now that the zero-copy mode is disabled, you probably need a larger `JsonDocument`, so don't forget to update the capacity. As usual, use the [ArduinoJson Assistant](/v6/assistant/) to compute the right capacity for your project.

Did this solve your issue?
