---
options:
  success:
    label: "Yes"
    summary: Adding a buffer solves the issue
    page: /done.md
  same-with-buffer:
    label: "No"
    summary: Adding a buffer doesn't solve the issue
    page: stream-log.md
---

[`IncompleteInput`](/v6/api/misc/deserializationerror/#incompleteinput) can be caused by an interruped connection. For example, this problem happens when the client reads to slowly.

Indeed, because it reads bytes one by one, [`deserializeJson()`](/v6/api/json/deserializejson/) can be slow with some implementations of [`Stream`](https://www.arduino.cc/reference/en/language/functions/communication/stream/). To speed up the reading, we must add a buffer between the [`Stream`](https://www.arduino.cc/reference/en/language/functions/communication/stream/) and [`deserializeJson()`](/v6/api/json/deserializejson/). The easiest way to do this is to use `ReadBufferingStream` from the [StreamUtils library](https://github.com/bblanchon/ArduinoStreamUtils):

```c++
// replace the following line:
deserializeJson(doc, stream);

// with these two lines:
ReadBufferingStream bufferedStream(stream, 64);
deserializeJson(doc, bufferedStream);
```

Thanks to `ReadBufferingStream`, the program will read the input in chunks of 64 bytes, which will be much faster.
Hopefully, this will keep the connection opened till the end of the message.

Did this solve your issue?
