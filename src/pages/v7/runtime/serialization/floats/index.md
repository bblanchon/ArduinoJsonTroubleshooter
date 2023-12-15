---
options:
  success:
    label: "Yes"
    summary: Replacing `float` with `double` fixes the issue
    page: /done.md
  double:
    label: "No"
    summary: Replacing `float` with `double` doesn't fix the issue
    page: double.md
---

Supposing that the JSON output looks like this:

```json
{"value":24.79999924}
```

I'm assuming you expect it to look like that:

```json
{"value":24.8}
```

Please change the type of the variable from `float` to `double` and try again.

Did this solve your issue?
