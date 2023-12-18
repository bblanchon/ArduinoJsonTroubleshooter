---
options:
  success:
    label: "Yes"
    summary: Providing a non-null default solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Providing a non-null default doesn't solve the issue
    page: /deadend.md
---

As per the standard, the behavior of [`strcpy()`](https://en.cppreference.com/w/c/string/byte/strcpy) (and [`strlcpy()`](https://en.wikibooks.org/wiki/C_Programming/C_Reference/nonstandard/strlcpy)) is undefined if one of the pointers is null.

The simplest solution is to change the default value returned by `JsonDocument`: instead of returning a null pointer when the value is missing, we can ask it to return an empty string (i.e., `""`) or some other replacement (e.g., `"<null>"`). We can do that with `operator|`.

Please provide a non-null default for all calls to [`strcpy()`](https://en.cppreference.com/w/c/string/byte/strcpy), like so:

```c++
// replace this:
strcpy(eventName, doc["event"]);

// ...with this:
strcpy(eventName, doc["event"] | "<null>");
```

Did this solve your issue?
