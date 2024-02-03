---
options:
  success:
    label: "Yes"
    summary: Setting `ARDUINOJSON_SLOT_ID_SIZE` to 4 solves the issue.
    page: /done.md
  slot-id-size-2:
    label: "No"
    summary: Setting `ARDUINOJSON_SLOT_ID_SIZE` to 4 doesn't solve the issue.
    page: /deadend.md
  fewer-than-255:
    label: My JSON document contains fewer than 65,535 nodes
    summary: The JSON document contains fewer than 65,535 nodes.
    page: ../make-room.md
---

Due to an optimization, a `JsonDocument` can only contain up to 65,535 nodes on a 32-bit CPU.
A node is a value, a key, or a member of an array.

You can push this limit by increasing `ARDUINOJSON_SLOT_ID_SIZE`, like so:

```cpp
#define ARDUINOJSON_SLOT_ID_SIZE 4
#include <ArduinoJson.h>
```

This will increase the limit to 4,294,967,295 nodes, but the memory consumption will increase by 50%.

Did this solve your issue?
