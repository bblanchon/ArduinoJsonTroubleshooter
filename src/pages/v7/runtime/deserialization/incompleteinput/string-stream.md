---
options:
 - id: success
   label: "Yes"
   summary: Reading from stream fixes the issue
   page: /done.md
 - id: failure
   label: "No"
   summary: Reading from stream doesn't fix the issue
   page: /deadend.md
---

To reduce the memory usage, you should try to pass the source (file, connection, stream, etc) directly to `deserializeJson()`, either via the [`Stream`](https://www.arduino.cc/reference/en/language/functions/communication/stream/) interface or via a [custom reader](/news/2019/11/01/version-6-13-0/). This will avoid the need for an intermediate buffer.

As usual, make sure the capacity of the `JsonDocument` is adapted to your needs by using the [ArduinoJson Assistant](/v7/assistant/)

Additionaly, you can add a [filter](/news/2020/03/22/version-6-15-0/) to remove all unneeded information from the `JsonDocument`.

You can see examples here:

* [JsonConfigFile.ino](/v7/example/config/)
* [JsonHttpClient.ino](/v7/example/http-client/)
* [Deserialization tutorial](/v7/doc/deserialization/)
* [Mastering ArduinoJson](/book/)

Did this solve your issue?
