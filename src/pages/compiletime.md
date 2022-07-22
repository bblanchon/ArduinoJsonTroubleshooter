---
choices:

  - id: ambiguous-string-assign
    label: ambiguous overload for `operator=` (operand types are `String` and ...)
    summary: Error says "ambiguous overload for `operator=` (operand types are `String` and ...)"
    next: compiletime/ambiguous-string-assign

  - id: begin-not-found
    label: '`begin`: no matching overloaded function found'
    summary: 'Error says "`begin`: no matching overloaded function found"'
    next: compiletime/iterate-ambiguous

  - id: print-ambiguous
    label: call of overloaded `print(...)` is ambiguous
    summary: Error says "call of overloaded `print(...)` is ambiguous"
    next: compiletime/print-ambiguous

  - id: cannot-bind-object-ref
    label: cannot bind non-const lvalue reference of type `ArduinoJson::JsonObject&` ...
    summary: Error says "cannot bind non-const lvalue reference of type `ArduinoJson::JsonObject&` ..."
    next: compiletime/objectref

  - id: pointer-to-object
    label: '`const void*` is not a pointer-to-object type'
    summary: Error says "`const void*` is not a pointer-to-object type"
    next: compiletime/not-pointer-to-object

  - id: doesnt-name-a-type
    label: '`doc` does not name a type'
    summary: Error says "`doc` does not name a type"
    next: compiletime/doesnt-name-a-type

  - id: class-from-arduinojson5
    label: DynamicJsonBuffer/StaticJsonBuffer is a class from ArduinoJson 5
    summary: Error says "DynamicJsonBuffer/StaticJsonBuffer is a class from ArduinoJson 5"
    next: compiletime/class-from-arduinojson5

  - id: char-pointer-conversion
    label: invalid conversion from `const char*` to `char*` [-fpermissive]
    summary: Error says "invalid conversion from `const char*` to `char*` [-fpermissive]"
    next: compiletime/char-pointer-conversion

  - id: invalid-conversion
    label: invalid use of incomplete type `class InvalidConversion<...>`
    summary: Error says "invalid use of incomplete type `class InvalidConversion<...>`"
    next: compiletime/invalid-conversion

  - id: jsondocument-copy
    label: '`JsonDocument::JsonDocument(const JsonDocument&)` is private'
    summary: 'Error says "`JsonDocument::JsonDocument(const JsonDocument&)` is private"'
    next: compiletime/jsondocument-private

  - id: macro-min
    label: macro `min` passed 3 arguments, but takes just 2
    summary: Error says "macro `min` passed 3 arguments, but takes just 2"
    next: compiletime/macro-min

  - id: basicjsondocument-default-constructor
    label: no default constructor exists for class `BasicJsonDocument`
    summary: Error says "no default constructor exists for class `BasicJsonDocument`"
    next: compiletime/basicjsondocument-default-constructor

  - id: basicjsondocument-missing-argument
    label: no matching function for call to `BasicJsonDocument::BasicJsonDocument()`
    summary: Error says "no matching function for call to `BasicJsonDocument::BasicJsonDocument()`"
    next: compiletime/basicjsondocument-missing-argument

  - id: converttojson
    label: no matching function for call to `convertToJson(...)`
    summary: Error says "no matching function for call to `convertToJson(...)`"
    next: compiletime/converttojson

  - id: no-matching-deserializejson
    label: no matching function for call to `deserializeJson(StaticJsonDocument<200> (&)(), ...)`
    summary: Error says "no matching function for call to `deserializeJson(StaticJsonDocument<200> (&)(), ...)`"
    next: compiletime/no-matching-deserializejson

  - id: unresolved-overloaded-function-type
    label: no matching function for call to `...(<unresolved overloaded function type>)`
    summary: Error says "no matching function for call to `...(<unresolved overloaded function type>)`"
    next: compiletime/unresolved-overloaded-function-type

  - id: cast-void-to-flashstringhelper
    label: reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed
    summary: Error says "reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed"
    next: compiletime/cast-void-to-flashstringhelper

  - id: member-write-in-char-ptr
    label: request for member `write` in ..., which is of non-class type `char*`
    summary: Error says "request for member `write` in ..., which is of non-class type `char*`"
    next: compiletime/member-write-in-char-ptr

  - id: range-based-for-requires-begin
    label: this range-based `for` statement requires a suitable "begin" function and none was found
    summary: Error says "this range-based `for` statement requires a suitable "begin" function and none was found"
    next: compiletime/iterate-ambiguous

  - id: not-in-list
    label: None of the above
    summary:  The error is not in the list
    next: deadend
---

Please look at the **first** error in the compiler output, and tell me what it is...