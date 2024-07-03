---
options:
  success:
    label: "Yes"
    summary: Shortening the path fixes the issue
    page: /done.md

  failure:
    label: "No"
    summary: Shortening the path doesn't fix the issue
    page: /deadend.md
---

This problem is not related to ArduinoJson, but it's a known issue on Windows.
It's frequent with ESP8266 and ESP32 but can happen with any device.

See:

* [espressif/arduino-esp32#6593](https://github.com/espressif/arduino-esp32/issues/6593)
* [bblanchon/ArduinoJson#1871](https://github.com/bblanchon/ArduinoJson/issues/1871)

The problem comes from the file path that is too long for the Windows API.

The solution is to reinstall Arduino (or the toolchain) in another location with a shorter path.

Did this solve your issue?
