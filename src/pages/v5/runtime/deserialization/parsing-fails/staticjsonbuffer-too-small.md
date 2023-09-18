---
options:
  success:
    label: "Yes"
    summary: Increasing the capacity fixes the issue
    page: /done.md
  input-valid:
    label: "No"
    summary: Increasing the capacity doesn't fix the issue
    page: staticjsonbuffer-too-big.md
---

A [`JsonBuffer`](/v5/api/jsonbuffer/) is a memory pool where the JSON parser stores the tokens of the parsed object.

`StaticJsonBuffer` is an implementation of a [`JsonBuffer`](/v5/api/jsonbuffer/) with fixed memory allocation.

This means that you need to specify the right size for the `StaticJsonBuffer`, otherwise the parser will not be able to allocate the memory it needs, and therefore it will return an error.

Use [ArduinoJson Assistant](/v5/assistant/) to compute the required size.

See also: [How to reduce memory usage?](/v5/faq/how-to-reduce-memory-usage/)

Did this solve your issue?
