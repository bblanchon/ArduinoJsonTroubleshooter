---
options:
  dangling:
    label: "Yes"
    summary: "The `JsonVariant` outlives the `JsonDocument`"
    page: jsonvariant-dangling.md
  not-dangling:
    label: "No"
    summary: "The `JsonVariant` doesn't outlive the `JsonDocument`"
    page: dangling-char-ptr.md
---

`JsonVariant` is a reference. As such, it doesn't hold any data but points to a value in the `JsonDocument`. When the `JsonDocument` is destructed, the value gets released, and the `JsonVariant` becomes a dangling reference.

Does the `JsonVariant` outlive the `JsonDocument`?
