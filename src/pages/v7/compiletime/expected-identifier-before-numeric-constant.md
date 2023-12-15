---
options:
  success:
    label: "Yes"
    summary: "`DynamicJsonDocument` is used as a member of a `class` or a `struct`"
    page: expected-identifier-before-numeric-constant-member.md
  failure:
    label: "No"
    summary: "`DynamicJsonDocument` isn't used as a member of a `class` or a `struct`"
    page: /deadend.md
---

Did you try to declare a [`DynamicJsonDocument`](/v7/api/dynamicjsondocument/) as a member of a `class` or a `struct`?