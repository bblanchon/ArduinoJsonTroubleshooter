---
options:
  success:
    label: "Yes"
    summary: Setting `ARDUINOJSON_STRING_LENGTH_SIZE` to 2 solves the issue
    page: /done.md
  string-length-size-2:
    label: "No"
    summary: Setting `ARDUINOJSON_STRING_LENGTH_SIZE` to 2 doesn't solve the issue
    page: when.md
  fewer-than-255:
    label: No string contains more than 255 characters
    summary: No string contains more than 255 characters
    page: when.md
---


Due to another optimization, strings in a `JsonDocument` can only contain up to 255 characters on an 8-bit CPU.

You can push this limit by increasing `ARDUINOJSON_STRING_LENGTH_SIZE`, like so:

```cpp
#define ARDUINOJSON_STRING_LENGTH_SIZE 2
#include <ArduinoJson.h>
```

This will increase the limit to 65,535 characters, but the memory consumption will increase slightly.

Did this solve your issue?
