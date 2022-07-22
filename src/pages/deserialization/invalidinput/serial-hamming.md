---
choices:
  - id: success
    label: "Yes"
    summary: Error-correction codes fix the issue
    next: done
  - id: ecc
    label: "No"
    summary: Error-correction codes doesn't fix the issue
    next: deserialization/invalidinput/serial-jsonlint
---

[Error-correction codes (ECC)](https://en.wikipedia.org/wiki/Error_correction_code) are a way of transmitting the data with redundant information that allows the receiver to fix most of the errors.
The most basic error-correction code is [Hamming(7,4)](https://en.wikipedia.org/wiki/Hamming(7,4)), which transmits 7 bits for every 4 bits of actual data.
In other words, it adds 3 bits of redundancy for every 4 bits that you send.
The magic with this code is that it can correct any 1-bit error in the 7 bits.

The simplest way to implement [Hamming(7,4)](https://en.wikipedia.org/wiki/Hamming(7,4)) on Arduino is to use the `HammingStream` class from the [StreamUtils](https://github.com/bblanchon/ArduinoStreamUtils) library:

```c++
HammingStream<7, 4> eccLinkSerial(linkSerial);
```

Now, you can use `eccSerial1` in place of the original `Serial1`; it will automatically encode and decode the information.

As [Hamming(7,4)](https://en.wikipedia.org/wiki/Hamming(7,4)) only transmits 7 bits of data, you can safely downgrade the serial link from 8 to 7 bits.
You can do this by passing `SERIAL_7N1` as the second argument of [`Serial::begin()`](https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/).
This feature is not supported by [`SoftwareSerial`](https://www.arduino.cc/en/Reference/SoftwareSerial), which is yet another reason to avoid it.

Error-correction codes are very powerful, but they'll never eliminate errors completely. For example, [Hamming(7,4)](https://en.wikipedia.org/wiki/Hamming(7,4)) can only fix a 1-bit error, so if two or more bits are swapped, it will not fix them.
To get more confidence in the integrity of the received data, the ultimate solution is to add an error detection scheme, like a checksum.

Did this solve your issue?