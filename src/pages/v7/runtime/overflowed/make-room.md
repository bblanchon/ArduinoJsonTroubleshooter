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

This means that ArduinoJson couldn't allocate enough memory for the JSON document.  
So you must free some memory.

See [How to reduce memory usage?](/v7/how-to/reduce-memory-usage/) for some tips.

Did this solve your issue?
