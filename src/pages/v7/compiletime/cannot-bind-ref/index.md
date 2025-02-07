---
options:
  jsonarray:
    label: "`JsonArray`"
    summary: The type is `JsonArray`
    page: jsonarray.md
    regex: JsonArray&'
  jsonobject:
    label: "`JsonObject`"
    summary: The type is `JsonObject`
    page: jsonobject.md
    regex: JsonObject&'
  other:
    label: None of the above
    summary: The type is neither `JsonArray` nor `JsonObject`
    page: /deadend.md
    regex: .*
---

The compiler is telling you that you cannot bind a reference to a temporary object.

Please look at the end of the error line and tell me what is the type of the temporary  object.
