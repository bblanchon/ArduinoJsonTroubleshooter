---
options:
  - id: certificate-problem
    label: "Yes"
    summary: Calling `WiFiClientSecure::setInsecure()` solves the issue.
    next: http-certificate-insecure
  - id: certificate-ok
    label: "No"
    summary: Calling `WiFiClientSecure::setInsecure()` doesn't solve the issue.
    next: http-timeout
---

With HTTPS, [`EmptyInput`](/v6/api/misc/deserializationerror/#emptyinput) can be due to an error during the validation of the certificate.

Please try to disable certificate validation by calling [`WiFiClientSecure::setInsecure()`](https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/bearssl-client-secure-class.html#setinsecure) before starting the HTTP request.

Did this solve your issue?