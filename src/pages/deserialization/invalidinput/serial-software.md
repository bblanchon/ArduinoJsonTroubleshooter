---
options:
  success:
    label: "Yes"
    summary: Removing `SoftwareSerial` solves the issue
    page: /done.md
  removed:
    label: "No"
    summary: Removing `SoftwareSerial` doesn't solve the issue
    page: serial-voltage.md
---

The [AVR](https://en.wikipedia.org/wiki/AVR_microcontrollers) implementation of [`SoftwareSerial`](https://www.arduino.cc/en/Reference/SoftwareSerial) is **notoriously unreliable** 😱.
The main problem is that it disables interrupts when sending data, which causes many issues like dropping incoming bytes on the regular [`Serial`](https://www.arduino.cc/reference/en/language/functions/communication/serial/).

You may consider the following alternative libraries, but none of them is perfect:

* [AltSoftSerial](https://github.com/PaulStoffregen/AltSoftSerial)
* [SlowSoftSerial](https://github.com/MustBeArt/SlowSoftSerial)
* [NeoSoftSerial](https://github.com/SlashDevin/NeoSWSerial)

However, I highly recommend that you use a hardware implementation (such as `Serial` or `Serial1`). Don't hesitate to upgrade your board to get one with more than one [UART](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter).

For example, if you're currently using an Arduino UNO, which has only one UART, you can upgrade to the Arduino Leonardo, which has three.

Did this solve your issue?