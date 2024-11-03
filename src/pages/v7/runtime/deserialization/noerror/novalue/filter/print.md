---
options:
  correct:
    label: "Yes, the filter looks correct"
    summary: Printing the filter shows that it is correct
    page: correct.md
  incorrect:
    label: "No, the filter is incorrect"
    summary: Printing the filter shows that it is incorrect
    page: incorrect.md
---

Please print the content of the filter, like so:

```c++
serializeJsonPretty(doc, filter);
```

Does this look correct?
