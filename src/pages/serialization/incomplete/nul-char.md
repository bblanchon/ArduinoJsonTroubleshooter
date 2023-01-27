---
choices:
  - id: nul
    label: "Yes"
    summary: One or more strings contain a NUL
    next: /nul-not-supported
  - id: no-nul
    label: "No"
    summary: No string contains a NUL
    next: /deadend
---

Does one of the strings in the [`JsonDocument`](/v6/api/jsondocument/) contains a NUL (i.e.,  ASCII code 0, or `\u0000`)?