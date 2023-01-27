---
choices:
  - id: char-ptr
    label: "`char*` (or `char[]`)"
    summary: Input type is `char*`
    next: /serialization/garbage/deserialize-zerocopy
  - id: const-char-ptr
    label: "`const char*`"
    summary: Input type is `const char*`
    next: /serialization/garbage/serialize
  - id: string
    label: "`String` (or `std::string`)"
    summary: Input type is `String`
    next: /serialization/garbage/serialize
  - id: stream
    label: "`Stream` (or `std::istream)`"
    summary: Input type is `Stream`
    next: /serialization/garbage/serialize
---

What's the type of the second argument passed to [`deserializeJson()`](/v6/api/json/deserializejson/)?