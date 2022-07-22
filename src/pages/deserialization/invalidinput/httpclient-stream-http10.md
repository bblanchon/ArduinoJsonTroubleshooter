---
choices:
  - id: success
    label: "Yes"
    summary: "Calling `HTTPClient::useHTTP10(true)` solves the issue"
    next: done
  - id: changed
    label:  "No"
    summary: "Calling `HTTPClient::useHTTP10(true)` doesn't solve the issue"
    next: deserialization/invalidinput/httpclient-stream-jsonlint
---

When you call `HTTPClient::getStream()`, you bypass the part that handles [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding).
As a result, the response's body may contain some hexadecimal number at the begining of each chunk.
The most straightforward workaround is to downgrade the connection to HTTP 1.0.

To do this, add the following line **before** sending the request:

```c++
http.useHTTP10(true);  // avoid Chunked Transfer Encoding
```

Did this solve your problem?
