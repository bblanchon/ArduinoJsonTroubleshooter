---
options:
  charptr:
    label: "Yes"
    summary: Program inserts string pointers into the `JsonDocument`
    page: charptr-comment.md
  no-charptr:
    label: "No"
    summary: Program doesn't insert string pointers into the `JsonDocument`
    page: output-type/index.md
---

Does your program insert string pointers in the [`JsonDocument`](/v6/api/jsondocument/)?  
(for example, `doc["name"] = name` where `name` is a `const char*`)
