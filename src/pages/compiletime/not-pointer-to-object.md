---
choices:
  - id: success
    label: "Yes"
    summary: Defining `ARDUINOJSON_ENABLE_PROGMEM` to `0` solves the issue
    next: /done
  - id: failure
    label: "No"
    summary: Defining `ARDUINOJSON_ENABLE_PROGMEM` to `0` doesn't solve the issue
    next: /deadend
---

This error comes from a bug in the [Arduino Core API](https://github.com/arduino/ArduinoCore-API) (or `Arduino.h`, if you prefer).
This bug was fixed by [arduino/ArduinoCore-API#118](https://github.com/arduino/ArduinoCore-API/pull/118) in October 2020, but the fix wasn't immediately propagated to derived projects.

First, make sure that every related piece of software is up-to-date.
Then, if the problem persists, please open an issue in the relevant project and mention [arduino/ArduinoCore-API#118](https://github.com/arduino/ArduinoCore-API/pull/118) in the description.

As a workaround, you can disable support for [`PROGMEM`](https://www.arduino.cc/reference/en/language/variables/utilities/progmem/) in ArduinoJson (your board doesn't support it anyway) by setting [ARDUINOJSON_ENABLE_PROGMEM](/v6/api/config/enable_progmem/) to `0`, like so:

```c++
#define ARDUINOJSON_ENABLE_PROGMEM 0
#include <ArduinoJson.h>
```

Did this fix your issue?