---
options:
  default-contructor:
    label: "`Class::Class()` (where `Class` can be any class or struct name)" 
    summary: Error says "no matching function for call to `Class::Class()`"
    regex: no matching function for call to '.*(\w+)::\1\(\)'
    page: default-contructor.md

  converttojson:
    label: "`convertToJson(...)`"
    summary: Error says "no matching function for call to `convertToJson(...)`"
    regex: convertToJson
    page: /v6/compiletime/no-matching-function/converttojson.md

  deserializejson:
    label: "`deserializeJson(StaticJsonDocument<200> (&)(), ...)`"
    summary: Error says "no matching function for call to `deserializeJson(StaticJsonDocument<200> (&)(), ...)`"
    regex: deserializeJson
    page: /v6/compiletime/no-matching-function/deserializejson.md

  jsondocument-int:
    label: "`JsonDocument::JsonDocument(int)`"
    summary: Error says "no matching function for call to `JsonDocument::JsonDocument(int)`"
    regex: JsonDocument\(int\)
    page: jsondocument-int.md

  unresolved-overloaded-function-type:
    label: "`...(<unresolved overloaded function type>)`"
    summary: Error says "no matching function for call to `...(<unresolved overloaded function type>)`"
    regex: <unresolved overloaded function type>
    page: /v6/compiletime/no-matching-function/unresolved-overloaded-function-type.md

  not-in-list:
    label: None of the above
    summary:  The error is not in the list
    regex: .*
    page: /unknown-error.md
---

What follows "no matching function for call to"?
