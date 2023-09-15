---
options:
  success:
    label: "Yes"
    summary: The input was invalid
    page: /done.md
  input-valid:
    label: "No"
    summary: The input is valid
    page: staticjsonbuffer-too-small.md
---

This seems obvious, but a lot of issues are caused by an invalid input.

In particular, if you're writing an HTTP client, you need to

1. Skip the HTTP headers.
2. Use HTTP 1.0 to prevent [chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
3. Increase the timeout

See [JsonHttpClient.ino](/v5/example/http-client/) for a reference implementation.

Did this solve your issue?
