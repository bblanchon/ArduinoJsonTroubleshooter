---
choices:
  - id: success
    label: "Yes"
    summary: Defining `ARDUINOJSON_ENABLE_STD_STRING` and `ARDUINOJSON_ENABLE_STD_STREAM` to `0` solves the issue
    next: done
  - id: failure
    label: "No"
    summary: Defining `ARDUINOJSON_ENABLE_STD_STRING` and `ARDUINOJSON_ENABLE_STD_STREAM` to `0` doesn't solve the issue
    next: deadend
---

This is a bug in some Arduino cores, most notably the one for {% include links/cpu/samd21 %}.

You can workaround this bug by defining both [`ARDUINOJSON_ENABLE_STD_STRING`](/v6/api/config/enable_std_string/) and [`ARDUINOJSON_ENABLE_STD_STREAM`](/v6/api/config/enable_std_stream/) to `0`, like so:

```c++
#define ARDUINOJSON_ENABLE_STD_STRING 0
#define ARDUINOJSON_ENABLE_STD_STREAM 0
#include <ArduinoJson.h>
```

You can find more information on this error here: [macro "min" passed 3 arguments, but takes just 2](/v6/error/macro-min-passed-3-arguments-but-takes-just-2/)

Did this solve your issue?