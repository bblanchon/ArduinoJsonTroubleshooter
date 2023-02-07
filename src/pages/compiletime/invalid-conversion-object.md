---
options:
  - id: success
    label: "Yes"
    summary: Replacing `JsonObject` with `JsonObjectConst` fixes the issue
    next: /done
  - id: failure
    label: "No"
    summary: Replacing `JsonObject` with `JsonObjectConst` doesn't fix the issue
    next: /deadend
---

Somewhere in your program, there is a conversion from [`JsonVariantConst`](/v6/api/jsonvariantconst/) to [`JsonObject`](/v6/api/jsonobject/). This conversion is invalid because it would convert a *read-only* reference to a *read-write* reference.

To fix this issue, you must use [`JsonObjectConst`](/v6/api/jsonobjectconst/) in place of [`JsonObject`](/v6/api/jsonobject/).

For example, if your program contains the expression `variant.as<JsonObject>()`, you must replace it with `variant.as<JsonObjectConst>()`. Alternatively, if your program contains a statement like `JsonObject obj = variant`, you must replace it with `JsonObjectConst obj = variant`.

Did this solve your issue?