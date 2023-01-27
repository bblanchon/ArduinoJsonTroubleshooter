---
choices:
  - id: success
    label: "Yes"
    summary: Switching to `DynamicJsonDocument` fixes the issue
    next: /done
  - id: dynamic
    label: "No"
    summary: Switching to `DynamicJsonDocument` doesn't fix the issue
    next: /serialization/garbage/document-dynamic
---

[`StaticJsonDocument`](/v6/api/staticjsondocument/) stores its memory pool in the stack.
A large memory pool can overflow the stack a produce all kinds of strange behavior.
In particural, a [stack overflow](https://en.wikipedia.org/wiki/Stack_buffer_overflow) can cause garbage in [`serializeJson()`](/v6/api/json/serializejson/)'s output.

Please switch to a [`DynamicJsonDocument`](/v6/api/dynamicjsondocument/).

Did this solve your issue?