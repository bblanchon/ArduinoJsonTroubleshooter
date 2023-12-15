---
options:
  httpclient:
    label: "Yes, I'm using `HTTPClient`"
    summary: "Program uses `HTTPClient`"
    page: http-httpclient.md
  http-library:
    label: "Yes, but it's not `HTTPClient`"
    summary: Program uses an unknown HTTP library
    page: http-otherlib.md
  no-library:
    label: "No"
    summary: Program doesn't use an HTTP library
    page: http-manual.md
---

Do you use an HTTP library?
