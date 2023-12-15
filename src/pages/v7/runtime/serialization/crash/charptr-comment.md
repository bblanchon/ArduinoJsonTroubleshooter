---
options:
  crash-with-literals:
    label: "Yes"
    summary: Replacing string pointers with literals doesn't fix the crash
    page: output-type/index.md
  no-crash-with-literals:
    label: "No"
    summary: Replacing string pointers with literals fixes the crash
    page: charptr-print.md
---

Please replace all those string pointers with literals.

For example, replace:

```c++
doc["name"] = name;
```

with:

```c++
doc["name"] = "name";
```

Does your program still crash?
