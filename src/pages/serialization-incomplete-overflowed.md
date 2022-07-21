---
choices:
  - id: success
    label: "Yes"
    summary: Increasing the capacity of the `JsonDocument` solves the issue.
    next: done
  - id: capacity-increased
    label: "No"
    summary: Increasing the capacity of the `JsonDocument` doesn't solve the issue.
    next: deadend
---

[`JsonDocument::overflowed()`]({% link v6/api/jsondocument/overflowed.md %}) returns `true` when you tried to insert a value in the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) but there isn't enough room to store it.

The solution is to increase the capacity of the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}). Don't forget to account for the size of the duplicated strings. As usual, use the [ArduinoJson Assistant]({% link v6/assistant/index.html %}) to compute the right capacity for your project.

For more explanations on this issue, please see [Why is the output incomplete?]({% link v6/issues/incomplete-output.md %}).

Did this solve your issue?