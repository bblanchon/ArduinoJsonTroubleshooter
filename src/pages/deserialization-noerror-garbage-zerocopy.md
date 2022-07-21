---
choices:
  - id: success
    label: "Yes, the input comes from a stream"
    summary: Input comes from a stream
    next: deserialization-noerror-garbage-zerocopy-stream
  - id: cast
    label: "No, it doesn't"
    summary: Input doesn't come from a stream
    next: deserialization-noerror-garbage-zerocopy-cast
---

When you pass a writeable buffer as the input of [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}), ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}); otherwise, all the strings in the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) will be dangling pointers.

Does your program fills this buffer from a {% include links/arduino/stream %} (like {% include links/arduino/file %}, {% include links/arduino/serial/class %}, {% include links/arduino/ethernet/client/class %}, {% include links/arduino/wificlient %}...)?