---
choices:
  - id: headers-skipped
    label: "Yes"
    summary: HTTP headers are skipped
    next: deserialization/invalidinput/http-manual-http10
  - id: headers-not-skipped
    label: "No"
    summary: HTTP headers are not skipped
    next: deserialization/invalidinput/http-manual-headers
---

Before calling [`deserializeJson()`](/v6/api/json/deserializejson/), did you skip the HTTP headers?