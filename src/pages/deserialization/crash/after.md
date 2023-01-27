---
choices:
  - id: strcmp
    label: Yes, there is a call to `strcmp()`
    summary: Program calls `strcmp()`
    next: after-strcmp
  - id: strcpy
    label: Yes, there is a call to `strcpy()`
    summary: Program calls `strcpy()`
    next: after-strcpy
  - id: success
    label: Yes, I found the issue
    summary: Program dereferences a null pointer
    next: /done
  - id: no-usual-suspect
    label: "No"
    summary: Program calls neither `strcmp()` nor `strcpy()`
    next: after-pointer
---

Most of the time, when a program crashes after [`deserializeJson()`](/v6/api/json/deserializejson/), it's because it dereferences a null pointer returned by the [`JsonDocument`](/v6/api/jsondocument/).

Take the following statement for example:

```c++
// void myFunction(const char*) defined somewhere

myFunction(doc["value"]);
```

If the key `"value"` isn't in the [`JsonDocument`](/v6/api/jsondocument/), the function `myFunction()` will receive a null pointer, which can cause a crash if the function isn't prepared for this.

Do you see something like this in your code?