---
options:
  strcmp:
    label: Yes, there is a call to `strcmp()`
    summary: Program calls `strcmp()`
    page: strcmp.md
  strcpy:
    label: Yes, there is a call to `strcpy()`
    summary: Program calls `strcpy()`
    page: strcpy.md
  printf:
    label: Yes, there is a call to `printf()`, `sprintf()`, or `snprintf()`
    summary: Program calls `printf()`, `sprintf()`, or `snprintf()`
    page: printf.md
  success:
    label: Yes, I found the issue
    summary: Program dereferences a null pointer
    page: /done.md
  no-usual-suspect:
    label: "No"
    summary: Program calls neither `strcmp()`, nor `strcpy()`, not `printf()`
    page: pointer.md
---

Most of the time, when a program crashes after [`deserializeJson()`](/v6/api/json/deserializejson/), it's because it dereferences a null pointer returned by the [`JsonDocument`](/v6/api/jsondocument/).

Here are the most common pitfalls:

```c++
if (strcmp(doc["key"], "value") == 0) {
  // ...
}

strcpy(buffer, doc["key"]);

printf("Value = %s\n", doc["key"])
sprintf(buffer, "Value = %s\n", doc["key"])
snprintf(buffer, sizeof(buffer), "Value = %s\n", doc["key"])
```

For each of these lines, if `"key"` isn't in the [`JsonDocument`](/v6/api/jsondocument/), the program behavior is undefined and is very likely to crash.

Do you see something like this in your code?
