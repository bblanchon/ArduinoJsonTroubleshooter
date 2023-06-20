---
options:
  nul:
    label: "Yes"
    summary: One or more strings contain a NUL
    page: /nul-not-supported.md
  no-nul:
    label: "No"
    summary: No string contains a NUL
    page: /deadend.md
---

Does one of the strings in the [`JsonDocument`](/v6/api/jsondocument/) contains a NUL (i.e.,  ASCII code 0, or `\u0000`)?