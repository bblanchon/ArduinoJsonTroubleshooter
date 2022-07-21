---
choices:
  - id: certificate-problem
    label: "Yes"
    summary: Calling `WiFiClientSecure::setInsecure()` solves the issue.
    next: deserialization-emptyinput-http-certificate-insecure
  - id: certificate-ok
    label: "No"
    summary: Calling `WiFiClientSecure::setInsecure()` doesn't solve the issue.
    next: deserialization-emptyinput-http-timeout
---

With HTTPS, [`EmptyInput`]({% link v6/api/misc/deserializationerror.md %}#emptyinput) can be due to an error during the validation of the certificate.

Please try to disable certificate validation by calling {% include links/esp8266/wificlientsecure/setinsecure %} before starting the HTTP request.

Did this solve your issue?