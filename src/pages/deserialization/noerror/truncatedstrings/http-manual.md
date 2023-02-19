---
options:
  - id: success
    label: "Yes"
    summary: "Using `HTTP/1.0` solves the issue"
    page: /done.md
  - id: http10
    label: "No"
    summary: "Using `HTTP/1.0` doesn't solve the issue"
    page: /deadend.md
---

When you use HTTP 1.1, the server can send the response with [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding).
As a result, the response's body may be split in multiple chunks, making some strings look like they are truncated (in reality, they contain a line-break).

The most straightforward workaround is to downgrade the connection to HTTP 1.0.
To do this, replace `HTTP/1.1` with `HTTP/1.0` in the first line of the request.

Did this solve your problem?
