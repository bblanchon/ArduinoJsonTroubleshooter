---
choices:
  - id: success
    label: "Yes"
    summary: Converting the value fixes the issue
    next: done
  - id: failure
    label: "No"
    summary: Converting the value doesn't fix the issue
    next: deadend
---

This error occurs when you try to insert an unsupported value type in a [`JsonDocument`]({% link v6/api/jsondocument/index.md %}).

To fix this error, you must either:

* change the type of value to a supported one (`const char*`, `int`, `float`, etc.)
* write a [custom converter]({% link _posts/2021-05-04-version-6-18-0.md %}) for this type

For more information, see [error: no matching function for call to 'convertToJson(...)']({% link v6/error/no-matching-function-for-call-to-converttojson.md %}).

Did this solve your issue?