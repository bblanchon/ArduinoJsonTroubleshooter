---
options:
  - id: success
    label: "Yes"
    summary: Logging helped fixing the issue
    page: /done.md
  - id: failure
    label: "No"
    summary: Logging didn't help fixing the issue
    page: /deadend.md
---

Maybe seeing where the input stops will give you an idea of what's going wrong.

We can log the characters read by [`deserializeJson()`](/v6/api/json/deserializejson/) by inserting a `ReadLoggingStream`, another class from the [StreamUtils library](https://github.com/bblanchon/ArduinoStreamUtils):

```c++
// replace the following line
deserializeJson(doc, wifiClient);

// with these two lines:
ReadLoggingStream loggingStream(stream, Serial);
deserializeJson(doc, loggingStream);
```

Thanks to `ReadLoggingStream`, this program prints every character read by [`deserializeJson()`](/v6/api/json/deserializejson/). Therefore, you'll be able to see where the input stops; hopefully, this will give you a better understanding of the problem.

When using `ReadLoggingStream`, it's crucial that you configure the serial port with a very high baud rate; otherwise the log will slow down the reading process, which is a problem as I explained previously.

Did this information help you solve your issue?