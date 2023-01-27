---
choices:
 - id: success
   label: "Yes"
   summary: Reading from stream fixes the issue
   next: /done
 - id: failure
   label: "No"
   summary: Reading from stream doesn't fix the issue
   next: /deadend
---

To reduce the memory usage, you should try to pass the source (file, connection, stream, etc) directly to [`deserializeJson()`](/v6/api/json/deserializejson/), either via the [`Stream`](https://www.arduino.cc/reference/en/language/functions/communication/stream/) interface or via a [custom reader](/news/2019/11/01/version-6-13-0/). This will avoid the need for an intermediate buffer.

As usual, make sure the capacity of the [`JsonDocument`](/v6/api/jsondocument/) is adapted to your needs by using the [ArduinoJson Assistant](/v6/assistant/)

Additionaly, you can add a [filter](/news/2020/03/22/version-6-15-0/) to remove all unneeded information from the [`JsonDocument`](/v6/api/jsondocument/).

You can see examples here:

* [JsonConfigFile.ino](/v6/example/config/)
* [JsonHttpClient.ino](/v6/example/http-client/)
* [Deserialization tutorial](/v6/doc/deserialization/)
* [Mastering ArduinoJson](/book/)

Did this solve your issue?