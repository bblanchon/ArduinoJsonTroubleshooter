---
options:
  - id: success
    label: "Yes"
    summary: Passing the stream to `deserializeJson()` fixes the issue
    next: /done
  - id: cast
    label: "No"
    summary: Passing the stream to `deserializeJson()` doesn't fix the issue
    next: /deadend
---

The easiest solution is to remove the buffer and pass the input stream directly to [`deserializeJson()`](/v6/api/json/deserializejson/).

For example, assuming the JSON document comes from a file:

```c++
// replace this:
std::unique_ptr<char[]> buf(new char[size]);
file.readBytes(buf.get(), size);
deserializeJson(doc, buf.get());

// ...with this:
deserializeJson(doc, file);
```

Now that the zero-copy mode is disabled, you probably need a larger [`JsonDocument`](/v6/api/jsondocument/), so don't forget to update the capacity. As usual, use the [ArduinoJson Assistant](/v6/assistant/) to compute the right capacity for your project.

Did this solve your issue?