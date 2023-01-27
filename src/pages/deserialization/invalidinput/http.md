---
choices:
  - id: httpclient
    label: "Yes, I'm using `HTTPClient`"
    summary: "Program uses `HTTPClient`"
    next: /deserialization/invalidinput/httpclient
  - id: http-library
    label: "Yes, but it's not `HTTPClient`"
    summary: Program uses an unknown HTTP library
    next: /deserialization/invalidinput/http-library
  - id: no-library
    label: "No"
    summary: Program doesn't use an HTTP library
    next: /deserialization/invalidinput/http-manual
---

Do you use an HTTP library?