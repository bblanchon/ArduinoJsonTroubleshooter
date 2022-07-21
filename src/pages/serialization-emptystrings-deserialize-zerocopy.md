---
choices:
  - id: success
    label: "Yes"
    summary: Casting the pointer fixes the issue
    next: done
  - id: casting-fails
    label: "No"
    summary: Casting the pointer doesn't fix the issue
    next: deadend
---

When you pass a writeable buffer as the input of [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}), ArduinoJson uses the **zero-copy mode**. Instead of copying the strings from the input into the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}); otherwise, all the strings in the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) will be dangling pointers.
Usually, this produces grabage in the output, but it can sometimes produce empty strings.

The easiest solution is to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:

```c++
// replace this:
deserializeJson(doc, input, inputSize);

// ...with this:
deserializeJson(doc, (const char*)input, inputSize);
```

Now that the zero-copy mode is disabled, you probably need a larger [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), so don't forget to update the capacity. As usual, use the [ArduinoJson Assistant]({% link v6/assistant/index.html %}) to compute the right capacity for your project.

Did this solve your issue?