---
choices:
  - id: success
    label: "Yes"
    summary: "Calling `HTTPClient::getString()` solves the issue"
    next: /done
  - id: getstring
    label: "No"
    summary: "Calling `HTTPClient::getString()` doesn't solves the issue"
    next: /deserialization/invalidinput/string-jsonlint
---

You're calling the wrong function:

* `HTTPClient::getString()` extracts the response's body
* `HTTPClient::readString()` is inherited from [`Stream`](https://www.arduino.cc/reference/en/language/functions/communication/stream/) and reads the complete response

Unless you have very good reasons, you should call `getString()` not `readString()`.

Do calling `HTTPClient::getString()` solves your issue?