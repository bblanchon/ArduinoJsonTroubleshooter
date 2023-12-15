---
options:
  string:
    label: A string (`const char*`, `String`, `std::string`...)
    summary: Input type is a string
    page: other-string.md
  stream:
    label: A stream (`Serial`, `WiFiClient`, `File`...)
    summary: Input type is a stream
    page: other-stream.md
---

The input is probably starting with a NUL character.

What type of input are you passing to [`deserializeJson()`](/v7/api/json/deserializejson/)?
