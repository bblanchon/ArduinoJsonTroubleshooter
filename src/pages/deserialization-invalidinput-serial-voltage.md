---
choices:
  - id: success
    label: "Yes"
    summary: The issue is a voltage mismatch
    next: done
  - id: voltage-ok
    label: "No"
    summary: The issue is not a voltage mismatch
    next: deserialization-invalidinput-serial-rate
---

Not all microcontrollers use the same voltage for the serial port.
Some use 5V logic; others use 3.3V; the table below shows the values for the most common development boards:

{% include tables/boards_voltage.html %}

If you need to wire two devices with different voltages, you need a [logic-level converter]({% include urls/amz/product asin='B00NAY2BBY' %}).

Did this solve your issue?