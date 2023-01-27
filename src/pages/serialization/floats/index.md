---
choices:
  - id: success
    label: "Yes"
    summary: Replacing `float` with `double` fixes the issue
    next: /done
  - id: double
    label: "No"
    summary: Replacing `float` with `double` doesn't fix the issue
    next: double
---

Supposing that the JSON output looks like this:

```json
{"value":23.79999924}
```

I'm assuming you expect it to look like that:

```json
{"value":24.8}
```

Please change the type of the variable from `float` to `double` and try again.

Did this solve your issue?