---
options:
  success:
    label: "Yes"
    summary: Reassigning references fixes the issue
    page: /done.md
  reassigned:
    label: "No"
    summary: Reassigning references doesn't fix the issue
    page: document.md
---

`JsonDocument::garbageCollect()` invalidates all previously acquired `JsonArray`, `JsonObject`, and `JsonVariant`.

After you call it, make sure to reassign  every references, like so:

```c++
JsonObject cfg = doc.createNestedObject("config");
// ...
doc.garbageCollect();
cfg = doc["config"];
```

Did this solve your issue?
