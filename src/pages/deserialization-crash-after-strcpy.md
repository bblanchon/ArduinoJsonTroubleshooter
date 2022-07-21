---
choices:
  - id: success
    label: "Yes"
    summary: Providing a non-null default solves the issue
    next: done
  - id: failure
    label: "No"
    summary: Providing a non-null default doesn't solve the issue
    next: deadend
---

As per the standard, the behavior of {% include links/c/strcpy %} (and {% include links/c/strlcpy %}) is undefined if one of the pointers is null.

The simplest solution is to change the default value returned by [`JsonDocument`]({% link v6/api/jsondocument/index.md %}): instead of returning a null pointer when the value is missing, we can ask it to return an empty string (i.e., `""`) or some other replacement (e.g., `"<null>"`). We can do that with [`operator|`]({% link v6/api/jsonvariant/or.md %}).

Please provide a non-null default for all calls to {% include links/c/strcpy %}, like so:

```c++
// replace this:
strcpy(eventName, doc["event"]);

// ...with this:
strcpy(eventName, doc["event"] | "<null>");
```

Did this solve your issue?