---
choices:
  - id: success
    label: "Yes"
    summary: Replacing `JsonVariant` with `JsonVariantConst` fixes the issue
    next: done
  - id: failure
    label: "No"
    summary: Replacing `JsonVariant` with `JsonVariantConst` doesn't fix the issue
    next: deadend
---

Somewhere in your program, there is a conversion from [`JsonVariantConst`]({% link v6/api/jsonvariantconst/index.md %}) to [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}). This conversion is invalid because it would convert a *read-only* reference to a *read-write* reference.

To fix this issue, you must use [`JsonVariantConst`]({% link v6/api/jsonvariantconst/index.md %}) in place of [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}).

For example, if your program contains the expression `variant.as<JsonVariant>()`, you must replace it with `variant.as<JsonVariantConst>()`. Alternatively, if your program contains a statement like `JsonVariant v = variant`, you must replace it with `JsonVariantConst v = variant`.

Did this solve your issue?