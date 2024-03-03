---
options:
  success:
    label: "Yes"
    summary: Removing the constructor argument solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Removing the constructor argument doesn't solve the issue
    page: /deadend.md
---

This error tells that `JsonDocument` has no constructor with an `int` parameter.  
Indeed, unlike `DynamicJsonDocument`, you don't need to specify the capacity of `JsonDocument`.

You can fix this error by removing the constructor argument:

```diff
- JsonDocument doc(200);
+ JsonDocument doc;
```

Did this solve your issue?
