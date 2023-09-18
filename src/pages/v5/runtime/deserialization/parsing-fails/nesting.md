---
options:
  success:
    label: "Yes"
    summary: Increasing the nesting limit fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Increasing the nesting limit doesn't fix the issue
    page: /deadend.md
---

This can happen if you're parsing an array or an object with many nesting levels, i.e. with a very deep layout.

You can solve this in two ways:

1. You can pass an additional argument to [`parseObject()`](/v5/api/jsonbuffer/parseobject/) to specify the new limit.
2. You can define [`ARDUINOJSON_DEFAULT_NESTING_LIMIT`](/v5/api/config/default_nesting_limit/) which is the default for this argument

Did this solve your issue?
