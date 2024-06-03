---
options:
  success:
    label: "Yes"
    summary: Increasing the buffer size solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Increasing the buffer size does not solve the issue
    page: /deadend.md
---

By default, PubSubClient has a maximum message size of 256 bytes.
You can increase this limit by calling `PubSubClient::setBufferSize(size)` before connecting to the MQTT broker.

Did this solve your issue?
