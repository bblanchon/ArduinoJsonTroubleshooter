---
options:
  acceptable:
    label: "Yes"
    page: /done.md
    summary: The document contains invalid UTF-16 sequences
  unacceptable:
    label: "No"
    page: unacceptable.md
    summary: The document doesn't contain invalid UTF-16 sequences
---

ArduinoJson ignores the following errors in UTF-16 sequences:

* `"\ud83d"` (a leading surrogate without a trailing surrogate)
* `"\udda4"` (a trailing surrogate without a leading surrogate)
* `"\ud83d\ud83d"` (two leading surrogates)

This is a known limitation of the parser, and it's not going to change in the future.

Did this solve your issue?
