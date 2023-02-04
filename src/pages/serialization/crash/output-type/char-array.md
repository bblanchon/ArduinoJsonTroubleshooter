---
choices:
  - id: success
    label: "Yes"
    summary: Switching to `String` solves the issue
    next: /done
  - id: failure
    label: "No"
    summary: Switching to `String` doesn't solve the issue
    next: /deadend
---

I think this output buffer could cause a [stack overflow](https://en.wikipedia.org/wiki/Stack_buffer_overflow).

Please try with a [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) instead of a `char[]`.

Did this solve your issue?