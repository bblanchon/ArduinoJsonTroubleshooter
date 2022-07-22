---
choices:
  - id: static
    label: "Yes" 
    summary: Program uses `StaticJsonDocument`
    next: deserialization-crash-static
  - id: no-static
    label: "No"
    summary: Program doesn't use `StaticJsonDocument`
    next: deserialization-crash-dynamic
---

A stack-overflow could cause the crash.

Do you use a [`StaticJsonDocument`](/v6/api/staticjsondocument/)?