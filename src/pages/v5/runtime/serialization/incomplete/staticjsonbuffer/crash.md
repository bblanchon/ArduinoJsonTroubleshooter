---
options:
  success:
    label: "Yes"
    page: /done.md
    summary: Switching to a `DynamicJsonBuffer` fixes the issue
  failure:
    label: "No"
    page: /deadend.md
    summary: Switching to a `DynamicJsonBuffer` doesn't fix the issue
---

The `StaticJsonBuffer` is too big and causes a stack-overflow

Please switch to a `DynamicJsonBuffer` and pass the capacity to the constructor, like so:

```diff
- StaticJsonBuffer<6000> jsonBuffer;
+ DynamicJsonBuffer jsonBuffer(6000);
```

Did this solve your issue?
