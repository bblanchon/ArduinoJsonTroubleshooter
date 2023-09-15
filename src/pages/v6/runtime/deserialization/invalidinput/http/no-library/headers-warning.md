---
options:
  success:
    label: "Yes"
    summary: Using a `char[]` fixes the warning
    page: /done.md
  failure:
    label: "No"
    summary: Using a `char[]` doesn't fix the warning
    page: /deadend.md
---

On some Arduino core (most notably [AVR core](https://github.com/arduino/ArduinoCore-avr/blob/master/cores/arduino/Stream.h)), [`Stream::find()`](https://www.arduino.cc/reference/en/language/functions/communication/stream/streamfind/) takes a `char*` instead of a `const char*`. In this case, you'll get a compiler warning, which you can fix by extracting a char array, like so:

```c++
char endOfHeaders[] = "\r\n\r\n";
client.find(endOfHeaders);
```

Did this fix your problem?
