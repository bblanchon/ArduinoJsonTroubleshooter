---
options:
  - id: success
    label: "Yes"
    summary: Including `ArduinoJson.h` fixes the issue
    next: /done
  - id: failure
    label: "No"
    summary: Including `ArduinoJson.h` doesn't fix the issue
    next: /deadend
---

You probably forgot to include the library header.

Please add the following line at the top of your program:

```c++
#include <ArduinoJson.h>
```

Did this fix your issue?