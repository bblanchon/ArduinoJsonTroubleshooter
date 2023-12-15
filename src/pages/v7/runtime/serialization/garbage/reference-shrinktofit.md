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

[`JsonDocument::shrinkToFit()`](/v7/api/basicjsondocument/shrinktofit/) invalidates all previously acquired [`JsonArray`](/v7/api/jsonarray/), [`JsonObject`](/v7/api/jsonobject/), and [`JsonVariant`](/v7/api/jsonvariant/).

After you call it, make sure to reassign  every references, like so:

```c++
JsonObject cfg = doc.createNestedObject("config");
// ...
doc.shrinkToFit();
cfg = doc["config"];
```

Did this solve your issue?
