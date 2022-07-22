---
choices:
  - id: success
    label: "Yes"
    summary: Adding `WriteBufferingStream` fixes the issue
    next: serialization-incomplete-overflowed
  - id: failure
    label: "No"
    summary: Adding `WriteBufferingStream` doesn't fix the issue
    next: deadend
---

[`serializeJson()`](/v6/api/json/serializejson/) writes the JSON document mostly one character at a time, which can be pretty slow with unbuffered streams (such as {% include links/arduino/ethernet/client/class %}, {% include links/arduino/wificlient %}, {% include links/arduino/file %}, and [PubSubClient](https://github.com/knolleary/pubsubclient/)).

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

The first line creates a new stream `bufferedStream` that implements buffering on top of the original (this is the {% include links/wikipedia/decorator %}).  
The second line writes the JSON document to the {% include links/esp8266/wificlient %} through the buffer.  
The last line flushes the buffer to make sure we send the end of the document.
