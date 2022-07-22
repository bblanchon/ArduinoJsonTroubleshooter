---
choices:
  - id: success
    label: "Yes"
    summary: Skipping HTTP headers solves the issue
    next: done
  - id: warning
    label: Yes, but there is a compiler warning about `client.find()`
    summary: Skipping HTTP headers solves the issue, but there is a warning
    next: deserialization/invalidinput/http-manual-headers-warning
  - id: header-skipped
    label: "No"
    summary: Skipping HTTP headers doesn't solve the issue
    next: deserialization/invalidinput/http-manual-http10
---

Just like the HTTP request, the response contains some headers, followed by an empty line, and then followed by the body.
The body is the part that contains the JSON document; therefore, before calling [`deserializeJson()`](/v6/api/json/deserializejson/), you must skip the headers.

To skip the headers, call [`Stream::find()`](https://www.arduino.cc/reference/en/language/functions/communication/stream/streamfind/), like so:

```c++
client.find("\r\n\r\n");
```

This function consumes the input stream until it finds the empty line (`\r\n\r\n`).

See the example [JsonHttpClient.ino](/v6/example/http-client/) for a complete implementation.

Did this fix your problem?