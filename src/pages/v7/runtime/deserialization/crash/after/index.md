---
options:
  jsonarray:
    label: "`JsonArray`"
    summary: The program crashes when reading a value from a `JsonArray`
    page: jsonarray.md
  jsondocument:
    label: "`JsonDocument`"
    summary: The program crashes when reading a value from the `JsonDocument`
    page: dangling-char-ptr.md
  jsonobject:
    label: "`JsonObject`"
    summary: The program crashes when reading a value from a `JsonObject`
    page: jsonobject.md
  jsonvariant:
    label: "`JsonVariant`"
    summary: The program crashes when reading a value from a `JsonVariant`
    page: jsonvariant.md
---

So, the program crashes when you try to extract a value from the JSON document.

What is the type of the variable you're extracting from?
