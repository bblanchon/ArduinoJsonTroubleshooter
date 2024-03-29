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

As far as the standard is concerned, the behavior of `printf()`, `sprintf()`, and `snprintf()` is undefined if a `%s` refers to a null string.

The simplest solution is to change the default value returned by `JsonDocument`: instead of returning a null pointer when the value is missing, we can ask it to return an empty string (i.e., `""`) or some other replacement (e.g., `"<null>"`). We can do that with `operator|`, like so:

```c++
// replace this:
printf("Event = %s\n", doc["event"]);

// ...with this:
printf("Event = %s\n", doc["event"] | "<null>");
```

Did this solve your issue?
