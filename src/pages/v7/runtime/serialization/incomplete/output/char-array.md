---
options:
  success:
    label: "Yes"
    summary: Increasing the buffer size solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Increasing the buffer size does not solve the issue
    page: /deadend.md
---

Please make sure that the size of the output buffer is large enough to hold the entire JSON document.
If the buffer is too small, the output will be truncated.

Did this solve your issue?
