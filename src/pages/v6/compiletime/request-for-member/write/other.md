---
options:
  success:
    label: "Yes"
    summary: Changing the second argument of `serializeJson()` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Changing the second argument of `serializeJson()` doesn't fix the issue
    page: /deadend.md
---

This error occurs when you pass a an unsupported type as the second parameter of `serializeJson()`.
The following types are supported:

- `char*`
- `String`
- `Print`
- `std::string`
- `std::ostream`

You can add support for other types by defining [custom writer classes](https://arduinojson.org/news/2019/11/01/version-6-13-0/#custom-writer).

Did this solve your issue?
