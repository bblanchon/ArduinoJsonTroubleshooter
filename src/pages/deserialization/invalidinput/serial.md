---
choices:
  - id: software
    label: "Yes"
    summary: Program uses `SoftwareSerial`
    next: deserialization/invalidinput/serial-software
  - id: hardware
    label: "No"
    summary: Program doesn't uses `SoftwareSerial`
    next: deserialization/invalidinput/serial-voltage
---    

Are you using [`SoftwareSerial`](https://www.arduino.cc/en/Reference/SoftwareSerial)?