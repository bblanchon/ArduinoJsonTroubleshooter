---
choices:
  - id: charptr
    label: "Yes"
    summary: Program inserts string pointers into the `JsonDocument`
    next: serialization-crash-charptr-comment
  - id: no-charptr
    label: "No"
    summary: Program doesn't insert string pointers into the `JsonDocument`
    next: serialization-crash-output-type
---

Does your program insert string pointers in the [`JsonDocument`]({% link v6/api/jsondocument/index.md %})?  
(for example, `doc["name"] = name` where `name` is a `const char*`)