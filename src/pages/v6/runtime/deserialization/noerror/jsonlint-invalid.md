---
options:
  acceptable:
    label: "Yes"
    page: /done.md
    summary: "`deserializeJson()` tolerates the error, and that's OK"
  unacceptable:
    label: "No"
    page: unacceptable.md
    summary: "`deserializeJson()` should not let this error pass"
---

ArduinoJson isn't very picky about the input: its implementation favors code size and speed over strict conformance.
After all, size and speed are what matter the most for embedded software, right?

This means that ArduinoJson's parser may accept documents that would be rejected by other parsers.

For example, `deserializeJson()` tolerates the following substitutions:

* `'hello'` instead of `"hello"` (single quotes)
* `nULL` or `n0n3` instead if `null` (only checks first character and length)
* `tRUE` or `t0t0` instead of `true` (ditto)
* `fALSE` or `fAkk3` instead of `false` (ditto)

It also ignores the follwing UTF-8 errors:

* `"\ud83d"` (a leading surrogate without a trailing surrogate)
* `"\udda4"` (a trailing surrogate without a leading surrogate)
* `"\ud83d\ud83d"` (two leading surrogates)

Lastly, it supports C++-style comments when [ARDUINOSJSON_ENABLE_COMMENTS](/v6/api/config/enable_comments/) is set to `1`.

As a result, you cannot use [`deserializeJson`](/v6/api/json/deserializejson/) as a JSON validator because you'd get many false-negatives.

Did this solve your issue?
