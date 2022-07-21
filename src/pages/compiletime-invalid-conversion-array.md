---
choices:
  - id: success
    label: "Yes"
    summary: Replacing `JsonArray` with `JsonArrayConst` fixes the issue
    next: done
  - id: failure
    label: "No"
    summary: Replacing `JsonArray` with `JsonArrayConst` doesn't fix the issue
    next: deadend
---

Somewhere in your program, there is a conversion from [`JsonVariantConst`]({% link v6/api/jsonvariantconst/index.md %}) to [`JsonArray`]({% link v6/api/jsonarray/index.md %}). This conversion is invalid because it would convert a *read-only* reference to a *read-write* reference.

To fix this issue, you must use [`JsonArrayConst`]({% link v6/api/jsonarrayconst/index.md %}) in place of [`JsonArray`]({% link v6/api/jsonarray/index.md %}).

For example, if your program contains the expression `variant.as<JsonArray>()`, you must replace it with `variant.as<JsonArrayConst>()`. Alternatively, if your program contains a statement like `JsonArray array = variant`, you must replace it with `JsonArrayConst array = variant`.

Did this solve your issue?