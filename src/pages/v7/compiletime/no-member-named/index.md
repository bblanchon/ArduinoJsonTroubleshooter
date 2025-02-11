---
options:
  read:
    label: "... has no member named 'read'"
    summary: Error says "... has no member named 'read'"
    regex: has no member named 'read'
    page: read.md
  reallocate:
    label: "... has no member named 'reallocate'; did you mean 'deallocate'?"
    summary: Error says "`class Xxx` has no member named 'reallocate'"
    regex: has no member named 'reallocate'
    page: reallocate/index.md
  unknown:
    label: None of the above
    summary:  The error is not in the list
    regex: .*
    page: /unknown-error.md
---

What is the rest of the error message?
