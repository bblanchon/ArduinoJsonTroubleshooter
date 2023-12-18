---
options:
  success:
    label: "Yes"
    summary: Setting `ARDUINOJSON_ENABLE_PROGMEM` to `0` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Setting `ARDUINOJSON_ENABLE_PROGMEM` to `0` doesn't fix the issue
    page: /deadend.md
---


The error should look like this:

```text
.../src/ArduinoJson/Polyfills/pgmspace_generic.hpp:14:10: error: reinterpret_cast from 'const void' to 'const __FlashStringHelper *' is not allowed
  return reinterpret_cast<T>(pgm_read_ptr(p));
         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

This error indicate that the return type of `pgm_read_ptr()` is incorrect: it should be `const void*`, but the error message shows it's `const void`.

This is a common bug in cores (or "framework") that emulate the original `pgmspace.h` header.
It already poped up in:

* ArduinoFake (issue [#1676](https://github.com/bblanchon/ArduinoJson/issues/1676))
* ESP8266 (issue [#1442](https://github.com/bblanchon/ArduinoJson/issues/1442))
* Industruino (issue [#1519](https://github.com/bblanchon/ArduinoJson/issues/1519))
* Particle Argon (issue [#1591](https://github.com/bblanchon/ArduinoJson/issues/1591))
* Teknic ClearCore (issue [#1381](https://github.com/bblanchon/ArduinoJson/issues/1381))
* Others (issue [#1536](https://github.com/bblanchon/ArduinoJson/issues/1536))

The root of this bug was fixed in October 2020 in [arduino/ArduinoCore-API#118](https://github.com/arduino/ArduinoCore-API/pull/118), but many clones are still using the old code.

To fix this issue, update your Arduino Core (or "framework") to the newest version.  

If the same error still occurs, please contact the relevant support team.
In the meantime, you can work around this issue by disabling PROGMEM support in ArduinoJson by setting `ARDUINOJSON_ENABLE_PROGMEM` to&nbsp;`0`, like so:

```c++
#define ARDUINOJSON_ENABLE_PROGMEM 0
#include <ArduinoJson.h>
```

Did this solve your issue?
