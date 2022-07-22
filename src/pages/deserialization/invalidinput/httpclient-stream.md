---
choices:
  - id: http10-true
    label: "Yes"
    summary: "Program calls `HTTPClient::useHTTP10(true)`"
    next: deserialization/invalidinput/httpclient-stream-jsonlint
  - id: http10-false
    label: "No"
    summary: "Program doesn't call `HTTPClient::useHTTP10(true)`"
    next: deserialization/invalidinput/httpclient-stream-http10
---

Did you call `HTTPClient::useHTTP10(true)`?