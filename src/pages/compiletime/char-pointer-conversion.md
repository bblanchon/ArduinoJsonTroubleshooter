---
choices:
  - id: success
    label: "Yes"
    summary: Changing the pointer type fixes the issue
    next: /done
  - id: failure
    label: "No"
    summary: Changing the pointer type doesn't fix the issue
    next: /deadend
---

This error occurs when you try to store a pointer of type `const char*` into a variable of type `char*`, like so:

```c++
char* eventName = doc["event"];
```

Indeed, [`JsonVariant`](/v6/api/jsonvariant/) returns a `const char*`, not a `char*`. You must change the type of the pointer, like so:

```c++
const char* eventName = doc["event"];
```

There are other similar situations where this error can occur. For more information, please read [invalid conversion from 'const char*' to 'char*' [-fpermissive]](/v6/error/invalid-conversion-from-const-char-to-char/).

Did this solve your issue?