---
choices:
  - id: headers-skipped
    label: "Yes"
    summary: HTTP headers are skipped
    next: deserialization-invalidinput-http-manual-http10
  - id: headers-not-skipped
    label: "No"
    summary: HTTP headers are not skipped
    next: deserialization-invalidinput-http-manual-headers
---

Before calling [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}), did you skip the HTTP headers?