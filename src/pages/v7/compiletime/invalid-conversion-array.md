---
options:
  success:
    label: "Yes"
    summary: Replacing `JsonArray` with `JsonArrayConst` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `JsonArray` with `JsonArrayConst` doesn't fix the issue
    page: /deadend.md
---

Somewhere in your program, there is a conversion from [`JsonVariantConst`](/v7/api/jsonvariantconst/) to [`JsonArray`](/v7/api/jsonarray/). This conversion is invalid because it would convert a *read-only* reference to a *read-write* reference.

To fix this issue, you must use [`JsonArrayConst`](/v7/api/jsonarrayconst/) in place of [`JsonArray`](/v7/api/jsonarray/).

For example, if your program contains the expression `variant.as<JsonArray>()`, you must replace it with `variant.as<JsonArrayConst>()`. Alternatively, if your program contains a statement like `JsonArray array = variant`, you must replace it with `JsonArrayConst array = variant`.

Did this solve your issue?