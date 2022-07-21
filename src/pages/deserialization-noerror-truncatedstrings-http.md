---
choices:
  - id: httpclient
    label: "Yes, I'm using `HTTPClient`"
    summary: "Program uses `HTTPClient`"
    next: deserialization-noerror-truncatedstrings-http-httpclient
  - id: http-library
    label: "Yes, but it's not `HTTPClient`"
    summary: Program uses an unknown HTTP library
    next: deserialization-noerror-truncatedstrings-http-otherlib
  - id: no-library
    label: "No"
    summary: Program doesn't use an HTTP library
    next: deserialization-noerror-truncatedstrings-http-manual
---

Do you use an HTTP library?