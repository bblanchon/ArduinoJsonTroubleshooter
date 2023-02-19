---
options:
  - id: success
    label: "Yes"
    summary: "Calling `HTTPClient::useHTTP10(true)` solves the issue"
    page: /done.md
  - id: http10
    label:  "No"
    summary: "Calling `HTTPClient::useHTTP10(true)` doesn't solve the issue"
    page: /deadend.md
---

When you call `HTTPClient::getStream()`, you bypass the part that handles [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding).
As a result, the response's body may be split in multiple chunks, making some strings look like they are truncated (in reality, they contain a line-break).

The most straightforward workaround is to downgrade the connection to HTTP 1.0.
To do this, add the following line **before** sending the request:

```c++
http.useHTTP10(true);  // avoid Chunked Transfer Encoding
```

Did this solve your problem?
