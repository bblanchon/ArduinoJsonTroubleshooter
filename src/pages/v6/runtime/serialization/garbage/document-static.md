---
options:
  success:
    label: "Yes"
    summary: Switching to `DynamicJsonDocument` fixes the issue
    page: /done.md
  dynamic:
    label: "No"
    summary: Switching to `DynamicJsonDocument` doesn't fix the issue
    page: document-dynamic.md
---

`StaticJsonDocument` stores its memory pool in the stack.
A large memory pool can overflow the stack a produce all kinds of strange behavior.
In particural, a [stack overflow](https://en.wikipedia.org/wiki/Stack_buffer_overflow) can cause garbage in `serializeJson()`'s output.

Please switch to a `DynamicJsonDocument`.

Did this solve your issue?
