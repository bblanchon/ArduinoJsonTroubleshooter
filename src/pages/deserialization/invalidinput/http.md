---
choices:
  - id: httpclient
    label: "Yes, I'm using `HTTPClient`"
    summary: "Program uses `HTTPClient`"
    next: httpclient
  - id: http-library
    label: "Yes, but it's not `HTTPClient`"
    summary: Program uses an unknown HTTP library
    next: http-library
  - id: no-library
    label: "No"
    summary: Program doesn't use an HTTP library
    next: http-manual
---

Do you use an HTTP library?