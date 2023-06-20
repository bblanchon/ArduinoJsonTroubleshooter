---
options:
  certificate-problem:
    label: "Yes"
    summary: Calling `WiFiClientSecure::setInsecure()` solves the issue.
    page: insecure-works.md
  certificate-ok:
    label: "No"
    summary: Calling `WiFiClientSecure::setInsecure()` doesn't solve the issue.
    page: insecure-fails.md
---

A negative number indicates an error on the client side.

With HTTPS, connection failures are often due to the certificate validation.

Please try to disable certificate validation by calling [`WiFiClientSecure::setInsecure()`](https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/bearssl-client-secure-class.html#setinsecure) before starting the HTTP request.

Did this solve your issue?