---
options:
  success:
    label: "Yes"
    summary: Replacing `strcmp()` with `==` solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `strcmp()` with `==` doesn't solve the issue
    page: /deadend.md
---

As per the standard, the behavior of [`strcmp()`](https://en.cppreference.com/w/c/string/byte/strcmp) is undefined if one of the two arguments is null.

That's not a problem for you because you don't need to call [`strcmp()`](https://en.cppreference.com/w/c/string/byte/strcmp). Indeed, `JsonVariant` supports all comparisons operators (`==`, `<`, `>`, `<=`, `>=`), and these operators handle null values correctly.

Please replace calls to [`strcmp()`](https://en.cppreference.com/w/c/string/byte/strcmp) with `==`, like so:

```c++
// replace this:
if (strcmp(doc["event"], "wakeup")) ...

// ...with this:
if (doc["event"] == "wakeup") ...
```

Did this solve your issue?
