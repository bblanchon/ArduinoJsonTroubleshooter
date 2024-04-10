---
options:
  success:
    label: "Yes"
    summary: Casting the `const char*` to `char*` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Casting the `const char*` to `char*` doesn't fix the issue
    page: /deadend.md
---

`JsonDocument` treats `const char*` and `char*` differently:

* it stores `const char*` as a pointer,
* it stores `char*` as a copy.

The rationale behind this design is that `const char*` is often used to point to a string literal, which is a read-only memory block. In this case, it's safe to store the pointer directly in the `JsonDocument`. On the other hand, `char*` is often used to point to a mutable memory block. In this case, storing the pointer directly in the `JsonDocument` would be unsafe because the memory block could be modified after the `JsonDocument` is created.

This means that if you pass a `const char*` to `JsonDocument`, you must ensure that the data pointed by the pointer remains valid for the lifetime of the `JsonDocument`.
If you cannot guarantee that, you should cast the pointer to a `char*` before passing it to `JsonDocument`, like so:

```diff
- doc["key"] = temporaryString;
+ doc["key"] = const_cast<char*>(temporaryString);
```

I know it's very unpleasant to use `const_cast`, but fortunately it's safe in this case because `JsonDocument` will not modify the data pointed by the pointer.

Did this solve your issue?
