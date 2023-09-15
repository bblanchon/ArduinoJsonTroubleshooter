---
options:
  success:
    label: "Yes"
    summary: Adding `WriteBufferingStream` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Adding `WriteBufferingStream` doesn't fix the issue
    page: /deadend.md
---

[`serializeJson()`](/v6/api/json/serializejson/) writes the JSON document mostly one character at a time, which can be pretty slow with unbuffered streams (such as [`EthernetClient`](https://www.arduino.cc/en/Reference/EthernetClient), [`WifiClient`](https://www.arduino.cc/en/Reference/WiFiClient), [`File`](https://www.arduino.cc/en/Reference/SD), and [PubSubClient](https://github.com/knolleary/pubsubclient/)).

To speed up the serialization process, you must insert a buffer between the stream and [`serializeJson()`](/v6/api/json/serializejson/).
The easiest way to do so it by using the `WriteBufferingStream` from the [StreamUtils](https://github.com/bblanchon/ArduinoStreamUtils) library.

Replace the following:

```c++
serializeJson(doc, stream);
```

with

```c++
WriteBufferingStream bufferedStream(stream, 64);
serializeJson(doc, bufferedStream);
bufferedStream.flush();
```

The first line creates a new stream `bufferedStream` that implements buffering on top of the original (this is the [decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern)).  
The second line writes the JSON document to the [`WiFiClient`](https://www.arduino.cc/en/Reference/WiFiClient) through the buffer.  
The last line flushes the buffer to make sure we send the end of the document.

Did this solve your issue?
