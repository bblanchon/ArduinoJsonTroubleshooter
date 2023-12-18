---
options:
  success:
    label: "Yes"
    summary: Adding a buffer solves the issue
    page: /done.md
  buffer:
    label: "No"
    summary: Adding a buffer doesn't solve the issue
    page: stream-bom.md
---

Sometimes, the input is invalid because some bytes were dropped when receiving the document.
Usually, this happens when the receiver reads the stream too slowly, which overflows a buffer somewhere in the path.

Indeed, because it reads bytes one by one, `deserializeJson()` can be slow with some implementations of [`Stream`](https://www.arduino.cc/reference/en/language/functions/communication/stream/). To speed up the reading, we must add a buffer between the [`Stream`](https://www.arduino.cc/reference/en/language/functions/communication/stream/) and `deserializeJson()`. The easiest way to do this is to use `ReadBufferingStream` from the [StreamUtils library](https://github.com/bblanchon/ArduinoStreamUtils):

```c++
// replace the following line:
deserializeJson(doc, stream);

// with these two lines:
ReadBufferingStream bufferedStream(stream, 64);
deserializeJson(doc, bufferedStream);
```

Thanks to `ReadBufferingStream`, the program will read the input in chunks of 64 bytes, which will be much faster.
Hopefully, it will be fast enough to read the whole message without droping any byte.

Did this solve your issue?
