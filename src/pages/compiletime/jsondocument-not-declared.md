---
options:
  - id: success
    label: "Yes"
    summary: Including `ArduinoJson.h` fixes the issue
    page: /done.md
  - id: failure
    label: "No"
    summary: Including `ArduinoJson.h` doesn't fix the issue
    page: /deadend.md
---

You probably forgot to include the library header.

Please add the following line at the top of your program:

```c++
#include <ArduinoJson.h>
```

Did this fix your issue?