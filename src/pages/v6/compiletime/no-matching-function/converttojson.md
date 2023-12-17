---
options:
  success:
    label: "Yes"
    summary: Converting the value fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Converting the value doesn't fix the issue
    page: /deadend.md
---

This error occurs when you try to insert an unsupported value type in a `JsonDocument`.

To fix this error, you must either:

* change the type of value to a supported one (`const char*`, `int`, `float`, etc.)
* write a [custom converter](/news/2021/05/04/version-6-18-0/) for this type

For more information, see [error: no matching function for call to 'convertToJson(...)'](/v6/error/no-matching-function-for-call-to-converttojson/).

Did this solve your issue?
