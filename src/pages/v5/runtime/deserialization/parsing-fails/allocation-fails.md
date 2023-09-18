---
options:
  success:
    label: "Yes"
    summary: Resetting the buffer, or reducing memory usage fixed the issue
    page: /done.md
  input-valid:
    label: "No"
    summary: Allocation doesn't fail
    page: wrong-parse-function.md
---

Unlike the `StaticJsonBuffer` which has a fixed size, the `DynamicJsonBuffer` will automatically grow when full.
If the [heap memory](https://en.wikipedia.org/wiki/Memory_management#HEAP) is exhausted, the `DynamicJsonBuffer` will fail to allocate memory and the parsing will fail.

If you are in this situation:

* Make sure you have enough RAM, use [ArduinoJson Assistant](/v5/assistant/) to compute the required size.
* Make sure you don't [reuse the same `JsonBuffer`](/v5/faq/how-to-reuse-a-jsonbuffer/).
  In particular make sure you don't use a [global `JsonBuffer`](/v5/faq/why-shouldnt-i-use-a-global-jsonbuffer/).

See also: [How to reduce memory usage?](/v5/faq/how-to-reduce-memory-usage/)

Did this solve your issue?
