---
options:
  success:
    label: "Yes"
    summary: The issue is a voltage mismatch
    page: /done.md
  voltage-ok:
    label: "No"
    summary: The issue is not a voltage mismatch
    page: serial-rate.md
---

Not all microcontrollers use the same voltage for the serial port.
Some use 5V logic; others use 3.3V.

For example, the Arduino UNO uses 5V whereas the ESP8266 uses 3.3V.

If you need to wire two devices with different voltages, you need a [logic-level converter](https://www.amazon.com/dp/B00NAY2BBY?tag=bblanchon0b-20).

Did this solve your issue?