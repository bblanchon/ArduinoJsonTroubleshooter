---
options:
  dangling:
    label: "Yes"
    summary: "The `JsonArray` outlives the `JsonDocument`"
    page: jsonarray-dangling.md
  not-dangling:
    label: "No"
    summary: "The `JsonArray` doesn't outlive the `JsonDocument`"
    page: dangling-char-ptr.md
---

`JsonArray` is a reference. As such, it doesn't hold any data but points to an array in the `JsonDocument`. When the `JsonDocument` is destructed, the array gets released, and the `JsonArray` becomes a dangling reference.

Does the `JsonArray` outlive the `JsonDocument`?
