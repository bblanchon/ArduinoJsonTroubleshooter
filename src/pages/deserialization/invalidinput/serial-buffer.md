---
options:
  success:
    label: "Yes"
    summary: Increasing serial buffer size solves the issue
    page: /done.md
  larger-buffer:
    label: "No"
    summary: Increasing serial buffer size doesn't solves the issue
    page: stream-bom.md
---

Sometimes, the input is invalid because some bytes were dropped when receiving the document.

This problem occurs when the sender writes bytes faster than the receiver reads them, filling up the receiver's serial buffer until it overflows and drops incoming bytes.
For example, this problem happens when the receiver is busy doing some other task while the sender is transmitting.
It also occurs when the receiver logs incoming data at a slower rate; that's why it's crucial to get the "debug" serial port running much faster than the "communication" serial.

You could solve this issue by increasing the serial buffer size; the details depend on each platform.
For Arduino UNO, the default is 64 and can be changed by defining the `SERIAL_RX_BUFFER_SIZE` macro.
For [ESP8266](https://en.wikipedia.org/wiki/ESP8266) and [ESP32](https://en.wikipedia.org/wiki/ESP32), the default is 256 and can be changed by calling `setRxBufferSize()`.

If your JSON document is significantly larger than the buffer, please try to increase the buffer size.

Did this solve your issue?
