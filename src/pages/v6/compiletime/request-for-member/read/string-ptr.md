---
options:
  success:
    label: "Yes"
    summary: Passing the string by value fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Passing the string by value doesn't fix the issue
    page: /deadend.md
---

This error occurs when you pass a pointer to a `String` to `deserializeJson()`.
The solution is to pass the string by reference instead of by pointer:

```diff
  String input = "{\"hello\":\"world\"}";
- deserializeJson(doc, &input);
+ deserializeJson(doc, input);
```

Did this solve your issue?
