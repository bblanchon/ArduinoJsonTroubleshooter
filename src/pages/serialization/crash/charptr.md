---
choices:
  - id: charptr
    label: "Yes"
    summary: Program inserts string pointers into the `JsonDocument`
    next: charptr-comment
  - id: no-charptr
    label: "No"
    summary: Program doesn't insert string pointers into the `JsonDocument`
    next: output-type
---

Does your program insert string pointers in the [`JsonDocument`](/v6/api/jsondocument/)?  
(for example, `doc["name"] = name` where `name` is a `const char*`)