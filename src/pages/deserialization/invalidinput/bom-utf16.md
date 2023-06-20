---
options:
  success:
    label: "Yes"
    summary: "`Accept: application/json;charset=utf-8` solves the issue"
    page: /done.md
  failure:
    label: "No"
    summary: "`Accept: application/json;charset=utf-8` doesn't solve the issue"
    page: /deadend.md
---

`254` or `255` is the first byte of the UTF-16 [Byte Order Mark](https://en.wikipedia.org/wiki/Byte_order_mark) (BOM). ArduinoJson doesn't support UTF-16; it only supports ASCII and UTF-8. As a workaround, we can ask the server to encode the response with UTF-8.

To do this, add the following header to the HTTP request:

```http
Accept: application/json;charset=utf-8
```

Did this solve your problem?