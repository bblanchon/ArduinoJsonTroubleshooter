---
options:
  success:
    label: "Yes"
    summary: Removing `.c_str()` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Removing `.c_str()` doesn't fix the issue
    page: /deadend.md
---

`JsonDocument` treats `const char*` and `String` differently:

* it stores `const char*` as a pointer,
* it stores `String` as a copy.

The rationale behind this design is that `const char*` is often used to point to a string literal, which is a read-only memory block. In this case, it's safe to store the pointer directly in the `JsonDocument`. On the other hand, `String` is often used to point to a mutable memory block. In this case, storing the pointer directly in the `JsonDocument` would be unsafe because the memory block could be modified after the `JsonDocument` is created.

The solution to your problem is to remove `.c_str()`. For example:

```diff
- doc["key"] = myString.c_str();
+ doc["key"] = myString;
```

Did this solve your issue?
