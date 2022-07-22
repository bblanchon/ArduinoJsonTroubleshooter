---
choices:
  - id: serialization/crash/charptr-print
    label: "Yes"
    summary: Replacing string pointers with literals doesn't fix the crash
    next: serialization/crash/output-type
  - id: no-charptr
    label: "No"
    summary: Replacing string pointers with literals fixes the crash
    next: serialization/crash/charptr-print
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