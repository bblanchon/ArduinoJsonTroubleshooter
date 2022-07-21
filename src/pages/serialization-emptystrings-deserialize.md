---
choices:
  - id: char-ptr
    label: "`char*` (or `char[]`)"
    summary: Input type is `char*`
    next: serialization-emptystrings-deserialize-zerocopy
  - id: const-char-ptr
    label: "`const char*`"
    summary: Input type is `const char*`
    next: deadend
  - id: string
    label: "`String` (or `std::string`)"
    summary: Input type is `String`
    next: deadend
  - id: stream
    label: "`Stream` (or `std::istream)`"
    summary: Input type is `Stream`
    next: deadend
---

What's the type of the second argument passed to [`deserializeJson()`]({% link v6/api/json/deserializejson.md %})?