---
choices:
  - id: strcmp
    label: Yes, there is a call to `strcmp()`
    summary: Program calls `strcmp()`
    next: deserialization-crash-after-strcmp
  - id: strcpy
    label: Yes, there is a call to `strcpy()`
    summary: Program calls `strcpy()`
    next: deserialization-crash-after-strcpy
  - id: success
    label: Yes, I found the issue
    summary: Program dereferences a null pointer
    next: done
  - id: no-usual-suspect
    label: "No"
    summary: Program calls neither `strcmp()` nor `strcpy()`
    next: deserialization-crash-after-pointer
---

Most of the time, when a program crashes after [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}), it's because it dereferences a null pointer returned by the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}).

Take the following statement for example:

```c++
// void myFunction(const char*) defined somewhere

myFunction(doc["value"]);
```

If the key `"value"` isn't in the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), the function `myFunction()` will receive a null pointer, which can cause a crash if the function isn't prepared for this.

Do you see something like this in your code?