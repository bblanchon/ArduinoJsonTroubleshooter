---
options:
  success:
    label: "Yes"
    summary: Replacing `JsonObject` with `JsonObjectConst` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `JsonObject` with `JsonObjectConst` doesn't fix the issue
    page: /deadend.md
---

Somewhere in your program, there is a conversion from [`JsonVariantConst`](/v7/api/jsonvariantconst/) to [`JsonObject`](/v7/api/jsonobject/). This conversion is invalid because it would convert a *read-only* reference to a *read-write* reference.

To fix this issue, you must use [`JsonObjectConst`](/v7/api/jsonobjectconst/) in place of [`JsonObject`](/v7/api/jsonobject/).

For example, if your program contains the expression `variant.as<JsonObject>()`, you must replace it with `variant.as<JsonObjectConst>()`. Alternatively, if your program contains a statement like `JsonObject obj = variant`, you must replace it with `JsonObjectConst obj = variant`.

Did this solve your issue?
