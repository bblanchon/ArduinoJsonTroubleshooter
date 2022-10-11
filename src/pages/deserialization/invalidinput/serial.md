---
choices:
  - id: software
    label: "Yes"
    summary: Program uses `SoftwareSerial`
    next: deserialization/invalidinput/serial-software
  - id: hardware
    label: "No"
    summary: Program doesn't use `SoftwareSerial`
    next: deserialization/invalidinput/serial-flush
---    

Are you using [`SoftwareSerial`](https://www.arduino.cc/en/Reference/SoftwareSerial)?