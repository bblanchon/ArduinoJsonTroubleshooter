---
choices:
  - id: success
    label: "Yes"
    summary: Reassigning references fixes the issue
    next: done
  - id: reassigned
    label: "No"
    summary: Reassigning references doesn't fix the issue
    next: serialization-garbage-document
---

[`JsonDocument::shrinkToFit()`]({% link v6/api/basicjsondocument/shrinktofit.md %}) invalidates all previously acquired [`JsonArray`]({% link v6/api/jsonarray/index.md %}), [`JsonObject`]({% link v6/api/jsonobject/index.md %}), and [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}).

After you call it, make sure to reassign  every references, like so:

```c++
JsonObject cfg = doc.createNestedObject("config");
// ...
doc.shrinkToFit();
cfg = doc["config"];
```

Did this solve your issue?