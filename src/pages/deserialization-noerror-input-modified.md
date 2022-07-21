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

When you pass a writeable buffer as the input of [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}), ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), it stores pointers to the input buffer.

While doing this, the parser modifies the input buffer to unescape special characters and add string terminator.
When [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}) returns the input buffer doesn't contain a valid JSON document anymore.

For more information, please see [Why is the input modified?]({% link v6/issues/altered-input.md %})

If you must preserve the input as it is, you must disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:

```c++
// replace this:
deserializeJson(doc, input, inputSize);

// ...with this:
deserializeJson(doc, (const char*)input, inputSize);
```

Now that the zero-copy mode is disabled, you probably need a larger [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), so don't forget to update the capacity. As usual, use the [ArduinoJson Assistant]({% link v6/assistant/index.html %}) to compute the right capacity for your project.

Did this solve your issue?
