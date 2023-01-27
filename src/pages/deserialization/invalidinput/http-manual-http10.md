---
choices:
  - id: success
    label: "Yes"
    summary: "Using `HTTP/1.0` solves the issue"
    next: /done
  - id: http10
    label: "No"
    summary: "Using `HTTP/1.0` doesn't solve the issue"
    next: inputtype
---

When you use HTTP 1.1, the server can send the response with [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding).
As a result, the response's body may contain some hexadecimal number at the begining of each chunk.
The most straightforward workaround is to downgrade the connection to HTTP 1.0.

To do this, replace `HTTP/1.1` with `HTTP/1.0` in the first line of the request.

Did this solve your problem?
