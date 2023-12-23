---
options:
  success:
    label: "Yes"
    summary: Changing the second argument of `deserializeJson()` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Changing the second argument of `deserializeJson()` doesn't fix the issue
    page: /deadend.md
---

This error occurs when you pass a an unsupported type as the second parameter of `deserializeJson()`.
The following types are supported:

- `const char*`
- `String`
- `Stream`
- `std::string`
- `std::string_view`
- `std::istream`

You can add support for other types by defining [custom reader classes](https://arduinojson.org/news/2019/11/01/version-6-13-0/#custom-reader).

Did this solve your issue?
