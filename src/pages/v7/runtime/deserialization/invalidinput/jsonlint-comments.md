---
options:
  success:
    label: "Yes"
    summary: Setting ARDUINOJSON_ENABLE_COMMENTS to 1 solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Setting ARDUINOJSON_ENABLE_COMMENTS to 1 doesn't solve the issue
    page: /deadend.md
---

[`deserializeJson()`](/v7/api/json/deserializejson/) can read JSON documents that contain comments, but the support is disabled by default to reduce the footprint of the library.

To enable the support for comments, define [`ARDUINOJSON_ENABLE_COMMENTS`](/v7/api/config/enable_comments/) to `1` before including `ArduinoJson.h`, like so:

```c++
#define ARDUINOJSON_ENABLE_COMMENTS 1
#include <ArduinoJson.h>
```

Did this solve your issue?
