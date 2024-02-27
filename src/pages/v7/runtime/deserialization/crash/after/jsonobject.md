---
options:
  dangling:
    label: "Yes"
    summary: "The `JsonObject` outlives the `JsonDocument`"
    page: jsonobject-dangling.md
  not-dangling:
    label: "No"
    summary: "The `JsonObject` doesn't outlive the `JsonDocument`"
    page: dangling-char-ptr.md
---

`JsonObject` is a reference. As such, it doesn't hold any data but points to an object in the `JsonDocument`. When the `JsonDocument` is destructed, the object gets released, and the `JsonObject` becomes a dangling reference.

Does the `JsonObject` outlive the `JsonDocument`?
