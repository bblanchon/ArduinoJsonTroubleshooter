---
choices:
  - id: success
    label: "Yes"
    summary: Removing `SoftwareSerial` solves the issue
    next: done
  - id: removed
    label: "No"
    summary: Removing `SoftwareSerial` doesn't solve the issue
    next: deserialization-invalidinput-serial-voltage
---

The {% include links/cpu/avr %} implementation of {% include links/arduino/softwareserial %} is **notoriously unreliable** 😱.
The main problem is that it disables interrupts when sending data, which causes many issues like dropping incoming bytes on the regular {% include links/arduino/serial/class %}.

You may consider the following alternative libraries, but none of them is perfect:

* [AltSoftSerial](https://github.com/PaulStoffregen/AltSoftSerial)
* [SlowSoftSerial](https://github.com/MustBeArt/SlowSoftSerial)
* [NeoSoftSerial](https://github.com/SlashDevin/NeoSWSerial)

However, I highly recommend that you use a hardware implementation (such as `Serial` or `Serial1`). Don't hesitate to upgrade your board to get one with more than one [UART](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter). The table below lists the possible candiates.

{% include tables/boards_extra_uarts.html %}

Did this solve your issue?