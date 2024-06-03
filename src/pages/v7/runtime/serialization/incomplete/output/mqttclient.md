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

By default, ArduinoMqttClient has a maximum message size of 256 bytes (128 bytes on AVR).  
You can increase this limit by calling [`MqttClient::setTxPayloadSize()`](https://github.com/arduino-libraries/ArduinoMqttClient/blob/0.1.8/src/MqttClient.h#L108) before connecting to the MQTT broker.

Did this solve your issue?
