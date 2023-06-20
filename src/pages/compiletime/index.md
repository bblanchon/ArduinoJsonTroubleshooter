---
options:
  requires-cpp-compiler:
    label: ArduinoJson requires a C++ compiler...
    summary: Error says "ArduinoJson requires a C++ compiler..."
    page: requires-cpp-compiler.md

  assignment-of-read-only-location:
    label: assignment of read-only location
    summary: Error says "assignment of read-only location"
    page: assignment-of-read-only-location.md

  ambiguous-string-assign:
    label: ambiguous overload for `operator=` (operand types are `String` and ...)
    summary: Error says "ambiguous overload for `operator=` (operand types are `String` and ...)"
    page: ambiguous-string-assign.md

  begin-not-found:
    label: '`begin`: no matching overloaded function found'
    summary: 'Error says "`begin`: no matching overloaded function found"'
    page: iterate-ambiguous.md

  error-constants:
    label: '`bits/error_constants.h`: No such file or directory'
    summary: 'Error says "`bits/error_constants.h`: No such file or directory'
    page: path-too-long.md

  print-ambiguous:
    label: call of overloaded `print(...)` is ambiguous
    summary: Error says "call of overloaded `print(...)` is ambiguous"
    page: print-ambiguous.md

  cannot-bind-object-ref:
    label: cannot bind non-const lvalue reference of type `ArduinoJson::JsonObject&` ...
    summary: Error says "cannot bind non-const lvalue reference of type `ArduinoJson::JsonObject&` ..."
    page: objectref.md

  pointer-to-object:
    label: '`const void*` is not a pointer-to-object type'
    summary: Error says "`const void*` is not a pointer-to-object type"
    page: not-pointer-to-object.md

  doesnt-name-a-type:
    label: '`doc` does not name a type'
    summary: Error says "`doc` does not name a type"
    page: doesnt-name-a-type.md

  dynamicjsonbuffer:
    label: '`DynamicJsonBuffer` is a class from ArduinoJson 5'
    summary: Error says "`DynamicJsonBuffer` is a class from ArduinoJson 5"
    page: class-from-arduinojson5.md

  dynamicjsondocument-not-declared:
    label: '`DynamicJsonDocument` was not declared in this scope'
    summary: Error says "`DynamicJsonDocument` was not declared in this scope"
    page: not-declared-in-this-scope/index.md

  char-pointer-conversion:
    label: invalid conversion from `const char*` to `char*` [-fpermissive]
    summary: Error says "invalid conversion from `const char*` to `char*` [-fpermissive]"
    page: char-pointer-conversion.md

  invalid-conversion:
    label: invalid use of incomplete type `class InvalidConversion<...>`
    summary: Error says "invalid use of incomplete type `class InvalidConversion<...>`"
    page: invalid-conversion.md

  jsondocument-copy:
    label: '`JsonDocument::JsonDocument(const JsonDocument&)` is private'
    summary: 'Error says "`JsonDocument::JsonDocument(const JsonDocument&)` is private"'
    page: jsondocument-private.md

  macro-min:
    label: macro `min` passed 3 arguments, but takes just 2
    summary: Error says "macro `min` passed 3 arguments, but takes just 2"
    page: macro-min.md

  basicjsondocument-default-constructor:
    label: no default constructor exists for class `BasicJsonDocument`
    summary: Error says "no default constructor exists for class `BasicJsonDocument`"
    page: basicjsondocument-default-constructor.md

  no-matching-function:
    label: no matching function for call to ...
    summary: Error says "no matching function for call to ..."
    page: no-matching-function/index.md

  passing-volatile-as-this-argument-discards-qualifiers:
    label: passing `volatile ...` as `this` argument discards qualifiers [-fpermissive]
    summary: Error says "passing `volatile ...` as `this` argument discards qualifiers [-fpermissive]"
    page: passing-volatile-as-this-argument-discards-qualifiers.md

  cast-void-to-flashstringhelper:
    label: reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed
    summary: Error says "reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed"
    page: cast-void-to-flashstringhelper.md

  member-write-in-char-ptr:
    label: request for member `write` in ..., which is of non-class type `char*`
    summary: Error says "request for member `write` in ..., which is of non-class type `char*`"
    page: member-write-in-char-ptr.md

  staticjsonbuffer:
    label: '`StaticJsonBuffer` is a class from ArduinoJson 5'
    summary: Error says "`StaticJsonBuffer` is a class from ArduinoJson 5"
    page: class-from-arduinojson5.md

  staticjsondocument-not-declared:
    label: '`StaticJsonDocument` was not declared in this scope'
    summary: Error says "`StaticJsonDocument` was not declared in this scope"
    page: not-declared-in-this-scope/index.md

  range-based-for-requires-begin:
    label: this range-based `for` statement requires a suitable "begin" function and none was found
    summary: Error says "this range-based `for` statement requires a suitable "begin" function and none was found"
    page: iterate-ambiguous.md

  not-in-list:
    label: None of the above
    summary:  The error is not in the list
    page: unknown-error.md
---

Please look at the **first** error in the compiler output, and tell me what it is...