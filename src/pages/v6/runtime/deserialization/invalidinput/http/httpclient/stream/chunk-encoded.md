---
options:
  success:
    label: "Yes"
    summary: Adding `ChunkDecodingStream` solves the issue
    page: /done.md
  changed:
    label:  "No"
    summary: Adding `ChunkDecodingStream` doesn't solve the issue
    page: /deadend.md
---

It looks like the server is sending a [chunk-encoded](https://en.wikipedia.org/wiki/Chunked_transfer_encoding) response, even though it's not supposed to.

You need to modify you program to decode the chunk-encoded stream before passing it to `deserializeJson()`.  
To do that, you can use the [`ChunkDecodingStream`](https://github.com/bblanchon/ArduinoStreamUtils#how-to-decode-http-chunks).
This class transforms a chunked-encoded stream into a regular stream.

First, install the [StreamUtils](https://github.com/bblanchon/ArduinoStreamUtils) library and include the header file.
Then modify you program like so:

```patch
+ const char* keys[] = {"Transfer-Encoding"};
+ http.collectHeaders(keys, 1);
  
  http.begin(client, url);
  http.GET();

- Stream& stream = http.getStream();  
+ Stream& rawStream = http.getStream();
+ ChunkDecodingStream decodedStream(http.getStream());  
+ Stream& stream = http.header("Transfer-Encoding") == "chunked" ? decodedStream : rawStream;
  
  deserializeJson(doc, stream);
```

By default, `HTTPClient` discards all headers, that's why we need to call `collectHeaders()` to ask it to collect the `Transfer-Encoding` header.  
This must be done **before** calling `http.GET()`.

Then, we pass either the raw stream or the decoded stream to `deserializeJson()` depending on the value of the `Transfer-Encoding` header; this way, we can handle both chunk-encoded and regular streams.

Did this solve your problem?
