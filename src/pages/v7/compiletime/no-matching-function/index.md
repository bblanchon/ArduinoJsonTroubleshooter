---
options:
  default-contructor:
    label: "`Class::Class()` (where `Class` can be any class or struct name)" 
    summary: Error says "no matching function for call to `Class::Class()`"
    page: default-contructor.md
    regex: no matching function for call to '.*(\w+)::\1\(\)'

  converttojson:
    label: "`convertToJson(...)`"
    summary: Error says "no matching function for call to `convertToJson(...)`"
    page: /v6/compiletime/no-matching-function/converttojson.md
    regex: convertToJson

  deserializejson:
    label: "`deserializeJson(StaticJsonDocument<200> (&)(), ...)`"
    summary: Error says "no matching function for call to `deserializeJson(StaticJsonDocument<200> (&)(), ...)`"
    page: /v6/compiletime/no-matching-function/deserializejson.md
    regex: deserializeJson

  jsondocument-int:
    label: "`JsonDocument::JsonDocument(int)`"
    summary: Error says "no matching function for call to `JsonDocument::JsonDocument(int)`"
    page: jsondocument-int.md
    regex: JsonDocument\(int\)

  unresolved-overloaded-function-type:
    label: "`...(<unresolved overloaded function type>)`"
    summary: Error says "no matching function for call to `...(<unresolved overloaded function type>)`"
    page: /v6/compiletime/no-matching-function/unresolved-overloaded-function-type.md
    regex: <unresolved overloaded function type>

  not-in-list:
    label: None of the above
    summary:  The error is not in the list
    page: /unknown-error.md
    regex: .*
---

What follows "no matching function for call to"?
