---
choices:
  - id: headers-skipped
    label: "Yes"
    summary: HTTP headers are skipped
    next: http-manual-http10
  - id: headers-not-skipped
    label: "No"
    summary: HTTP headers are not skipped
    next: http-manual-headers
---

Before calling [`deserializeJson()`](/v6/api/json/deserializejson/), did you skip the HTTP headers?