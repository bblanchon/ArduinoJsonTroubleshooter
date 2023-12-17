---
options:
  success:
    label: "Yes, the input comes from a stream"
    summary: Input comes from a stream
    page: zerocopy-stream.md
  cast:
    label: "No, it doesn't"
    summary: Input doesn't come from a stream
    page: zerocopy-cast.md
---

When you pass a writeable buffer as the input of [`deserializeJson()`](/v6/api/json/deserializejson/), ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the `JsonDocument`, it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the `JsonDocument`; otherwise, all the strings in the `JsonDocument` will be dangling pointers.

Does your program fills this buffer from a [`Stream`](https://www.arduino.cc/reference/en/language/functions/communication/stream/) (like [`File`](https://www.arduino.cc/en/Reference/SD), [`Serial`](https://www.arduino.cc/reference/en/language/functions/communication/serial/), [`EthernetClient`](https://www.arduino.cc/en/Reference/EthernetClient), [`WifiClient`](https://www.arduino.cc/en/Reference/WiFiClient)...)?
