---
choices:
  - id: success
    label: "Yes"
    summary: Reassigning references fixes the issue
    next: /done
  - id: reassigned
    label: "No"
    summary: Reassigning references doesn't fix the issue
    next: /serialization/garbage/document
---

[`JsonDocument::garbageCollect()`](/v6/api/jsondocument/garbagecollect/) invalidates all previously acquired [`JsonArray`](/v6/api/jsonarray/), [`JsonObject`](/v6/api/jsonobject/), and [`JsonVariant`](/v6/api/jsonvariant/).

After you call it, make sure to reassign  every references, like so:

```c++
JsonObject cfg = doc.createNestedObject("config");
// ...
doc.garbageCollect();
cfg = doc["config"];
```

Did this solve your issue?