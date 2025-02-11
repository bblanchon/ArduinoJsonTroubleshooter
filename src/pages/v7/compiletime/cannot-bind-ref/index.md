---
options:
  jsonarray:
    label: "`JsonArray`"
    summary: The type is `JsonArray`
    regex: JsonArray&'
    page: jsonarray.md
  jsonobject:
    label: "`JsonObject`"
    summary: The type is `JsonObject`
    regex: JsonObject&'
    page: jsonobject.md
  other:
    label: None of the above
    summary: The type is neither `JsonArray` nor `JsonObject`
    regex: .*
    page: /deadend.md
---

The compiler is telling you that you cannot bind a reference to a temporary object.

Please look at the end of the error line and tell me what is the type of the temporary  object.
