---
choices:
  - id: success
    label: "Yes"
    summary: Defining `ARDUINOJSON_USE_DOUBLE` to `0` fixes the issue
    next: /done
  - id: failure
    label: "No"
    summary: Defining `ARDUINOJSON_USE_DOUBLE` to `0` doesn't fix the issue
    next: /deadend
---

I'm surprised that the previous solution didn't work.

We can try to change ArduinoJson's storage type to see if it solves your issue.

Please define [ARDUINOJSON_USE_DOUBLE](/v6/api/config/use_double/) to `0` before including `ArduinoJson.h`, like so:

```c++
#define ARDUINOJSON_USE_DOUBLE 0
#include <ArduinoJson.h>
```

Did this solve your issue?