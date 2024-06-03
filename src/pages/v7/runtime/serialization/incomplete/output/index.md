---
options:
  char-ptr:
    label: "`char*`"
    summary: The output is a `char*`
    page: char-ptr.md
  char-array:
    label: "`char[N]`"
    summary: The output is a `char[N]`
    page: char-array.md
  mqttclient:
    label: "`MqttClient`"
    summary: The output is a `MqttClient`
    page: mqttclient.md
  pubsubclient:
    label: "`PubSubClient`"
    summary: The output is a `PubSubClient`
    page: pubsubclient.md
  other:
    label: None of the above
    summary: The output is neither a `char*`, `char[N]`, `MqttClient`, nor `PubSubClient`
    page: /deadend.md
---

What is the type of the second argument of `serializeJson()`?
