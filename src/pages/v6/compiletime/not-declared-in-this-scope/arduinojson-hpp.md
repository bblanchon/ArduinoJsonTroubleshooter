---
options:
  success:
    label: "Yes"
    summary: Adding `using namespace ArduinoJson` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Adding `using namespace ArduinoJson`doesn't fix the issue
    page: /deadend.md
---

Unlike `ArduinoJson.h`, `ArduinoJson.hpp` keeps everything in the `ArduinoJson` namespace.

Please add the following statement after the `#include` statements:

```c++
using namespace ArduinoJson;
```

Did this solve your issue?
