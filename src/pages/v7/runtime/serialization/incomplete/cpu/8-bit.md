---
options:
  success:
    label: "Yes"
    summary: Setting `ARDUINOJSON_SLOT_ID_SIZE` to 2 solves the issue.
    page: /done.md
  slot-id-size-2:
    label: "No"
    summary: Setting `ARDUINOJSON_SLOT_ID_SIZE` to 2 doesn't solve the issue.
    page: /deadend.md
  fewer-than-255:
    label: My JSON document contains fewer than 255 nodes
    summary: The JSON document contains fewer than 255 nodes.
    page: ../make-room.md
---

Due to an optimization, a `JsonDocument` can only contain up to 255 nodes on an 8-bit CPU.
A node is a value, a key, or a member of an array.

You can push this limit by increasing `ARDUINOJSON_SLOT_ID_SIZE`, like so:

```cpp
#define ARDUINOJSON_SLOT_ID_SIZE 2
#include <ArduinoJson.h>
```

This will increase the limit to 65535 nodes, but the memory consumption will increase by 12.5%.

Did this solve your issue?
