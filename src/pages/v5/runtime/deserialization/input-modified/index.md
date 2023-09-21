---
options:
  const-char-ptr:
    label: "`const char*`"
    page: /deadend.md
    summary: Input is a `const char*`
  char-ptr:
    label: "`char*`"
    page: zero-copy.md
    summary: Input is a `char*`
  char-array:
    label: "`char[]`"
    page: zero-copy.md
    summary: Input is a `char[]`
  std-string:
    label: "`std::string`"
    page: /deadend.md
    summary: Input is a `std::string`
  std-istream:
    label: "`std::istream`"
    page: /deadend.md
    summary: Input is a `std::istream`
  string:
    label: "`String`"
    page: /deadend.md
    summary: Input is a `String`
  stream:
    label: "`Stream`"
    page: /deadend.md
    summary: Input is a `Stream`
  flash:
    label: "`const __FlashStringHelper*`"
    page: /deadend.md
    summary: Input is a `const __FlashStringHelper*`
  other:
    label: Something else
    page: /deadend.md
    summary: Input type is not in the list
---

What is the type of the first argument of `parseArray()` or `parseObject()`?