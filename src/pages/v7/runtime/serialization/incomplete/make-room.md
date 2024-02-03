---
options:
  success:
    label: "Yes"
    summary: Freeing some memory solves the issue.
    page: /done.md
  failure:
    label: "No"
    summary: Freeing some memory doesn't solve the issue.
    page: too-small.md
---

`JsonDocument::overflowed()` returns `true` when you try to insert a value in the `JsonDocument`, but the memory allocation fails.

The solution is to free some memory.

See [How to reduce memory usage?](/v7/how-to/reduce-memory-usage/) for some tips.

Did this solve your issue?
