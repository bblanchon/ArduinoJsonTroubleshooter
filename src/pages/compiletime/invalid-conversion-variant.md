---
options:
  success:
    label: "Yes"
    summary: Replacing `JsonVariant` with `JsonVariantConst` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `JsonVariant` with `JsonVariantConst` doesn't fix the issue
    page: /deadend.md
---

Somewhere in your program, there is a conversion from [`JsonVariantConst`](/v6/api/jsonvariantconst/) to [`JsonVariant`](/v6/api/jsonvariant/). This conversion is invalid because it would convert a *read-only* reference to a *read-write* reference.

To fix this issue, you must use [`JsonVariantConst`](/v6/api/jsonvariantconst/) in place of [`JsonVariant`](/v6/api/jsonvariant/).

For example, if your program contains the expression `variant.as<JsonVariant>()`, you must replace it with `variant.as<JsonVariantConst>()`. Alternatively, if your program contains a statement like `JsonVariant v = variant`, you must replace it with `JsonVariantConst v = variant`.

Did this solve your issue?
