---
choices:
 - id: success
   label: "Yes"
   summary: Reading from stream fixes the issue
   next: done
 - id: failure
   label: "No"
   summary: Reading from stream doesn't fix the issue
   next: deadend
---

To reduce the memory usage, you should try to pass the source (file, connection, stream, etc) directly to [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}), either via the {% include links/arduino/stream %} interface or via a [custom reader]({% link _posts/2019-11-01-version-6-13-0.md %}). This will avoid the need for an intermediate buffer.

As usual, make sure the capacity of the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) is adapted to your needs by using the [ArduinoJson Assistant]({% link v6/assistant/index.html %})

Additionaly, you can add a [filter]({% link _posts/2020-03-22-version-6-15-0.md %}) to remove all unneeded information from the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}).

You can see examples here:

* [JsonConfigFile.ino]({% link v6/example/config.md %})
* [JsonHttpClient.ino]({% link v6/example/http-client.md %})
* [Deserialization tutorial]({% link v6/doc/deserialization.md %})
* [Mastering ArduinoJson]({% link book/index.md %})

Did this solve your issue?