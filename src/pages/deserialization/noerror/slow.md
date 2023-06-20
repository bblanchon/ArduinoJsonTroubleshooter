---
options:
  success:
    label: "Yes"
    summary: "`ReadBufferingStream` solves the issue"
    page: /done.md
  buffered:
    label: "No"
    summary: "`ReadBufferingStream` doesn't solve the issue"
    page: /deadend.md
---

Indeed, [`deserializeJson()`](/v6/api/json/deserializejson/) can be pretty slow with unbuffered implementations of [`Stream`](https://www.arduino.cc/reference/en/language/functions/communication/stream/) (such as `File` and `WiFiClient`) because it reads characters one by one.

Why does it reads bytes one by one?  
Because it has to stop exactly at the end of the document to support [JSON streaming](https://en.wikipedia.org/wiki/JSON_streaming) and similar techniques.

To speed up the process, we need to insert a buffer between the [`Stream`](https://www.arduino.cc/reference/en/language/functions/communication/stream/) and [`deserializeJson()`](/v6/api/json/deserializejson/).  The easiest way to do this is to use `ReadBufferingStream` from the [StreamUtils library](https://github.com/bblanchon/ArduinoStreamUtils):

```c++
// replace the following line:
deserializeJson(doc, stream);

// with these two lines:
ReadBufferingStream bufferedStream(stream, 64);
deserializeJson(doc, bufferedStream);
```

Thanks to `ReadBufferingStream`, the program will read the input in chunks of 64 bytes, which will be much faster.

Did this solve your issue?