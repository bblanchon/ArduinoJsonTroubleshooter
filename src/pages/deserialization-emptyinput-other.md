---
choices:
  - id: string
    label: A string (`const char*`, `String`, `std::string`...)
    summary: Input type is a string
    next: deserialization-emptyinput-other-string
  - id: stream
    label: A stream (`Serial`, `WiFiClient`, `File`...)
    summary: Input type is a stream
    next: deserialization-emptyinput-other-stream
---

The input is probably starting with a NUL character.

What type of input are you passing to [`deserializeJson()`]({% link v6/api/json/deserializejson.md %})?
