---
options:
  - id: success
    label: "Yes"
    summary: Defining `ARDUINOJSON_DECODE_UNICODE` solves the issue
    next: /done
  - id: decode-unicode-set
    label: "No"
    summary: Defining `ARDUINOJSON_DECODE_UNICODE` doesn't solve the issue
    next: msgpack
---

[`deserializeJson()`](/v6/api/json/deserializejson/) returns [`NotSupported`](/v6/api/misc/deserializationerror/#notsupported) when is read an UTF-16 escape sequence but support is disabled.

To fix this issue, you must enable support UTF-16 escape sequences by defining [`ARDUINOJSON_DECODE_UNICODE`](/v6/api/config/decode_unicode/) to `1` before including `ArduinoJson.h`, like so:

```c++
#define ARDUINOJSON_DECODE_UNICODE 1
#include <ArduinoJson.h>
```

Did this solve your issue?