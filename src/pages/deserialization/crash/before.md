---
options:
  - id: static
    label: "Yes" 
    summary: Program uses `StaticJsonDocument`
    next: static
  - id: no-static
    label: "No"
    summary: Program doesn't use `StaticJsonDocument`
    next: dynamic
---

A stack-overflow could cause the crash.

Do you use a [`StaticJsonDocument`](/v6/api/staticjsondocument/)?