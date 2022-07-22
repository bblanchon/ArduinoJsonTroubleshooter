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

When you pass a writeable buffer as the input of [`deserializeJson()`](/v6/api/json/deserializejson/), ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the [`JsonDocument`](/v6/api/jsondocument/), it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the [`JsonDocument`](/v6/api/jsondocument/); otherwise, all the strings in the [`JsonDocument`](/v6/api/jsondocument/) will be dangling pointers.

Does your program fills this buffer from a {% include links/arduino/stream %} (like {% include links/arduino/file %}, {% include links/arduino/serial/class %}, {% include links/arduino/ethernet/client/class %}, {% include links/arduino/wificlient %}...)?