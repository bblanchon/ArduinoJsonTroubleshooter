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

[`JsonDocument::shrinkToFit()`](/v6/api/basicjsondocument/shrinktofit/) invalidates all previously acquired [`JsonArray`](/v6/api/jsonarray/), [`JsonObject`](/v6/api/jsonobject/), and [`JsonVariant`](/v6/api/jsonvariant/).

After you call it, make sure to reassign  every references, like so:

```c++
JsonObject cfg = doc.createNestedObject("config");
// ...
doc.shrinkToFit();
cfg = doc["config"];
```

Did this solve your issue?
