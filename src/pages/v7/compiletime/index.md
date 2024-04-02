---
options:
  requires-cpp-compiler:
    label: ArduinoJson requires a C++ compiler...
    summary: Error says "ArduinoJson requires a C++ compiler..."
    page: /v6/compiletime/requires-cpp-compiler.md

  assignment-of-read-only-location:
    label: assignment of read-only location
    summary: Error says "assignment of read-only location"
    page: assignment-of-read-only-location.md

  ambiguous-string-assign:
    label: ambiguous overload for `operator=` (operand types are `String` and ...)
    summary: Error says "ambiguous overload for `operator=` (operand types are `String` and ...)"
    page: /v6/compiletime/ambiguous-string-assign.md

  begin-not-found:
    label: '`begin`: no matching overloaded function found'
    summary: 'Error says "`begin`: no matching overloaded function found"'
    page: /v6/compiletime/iterate-ambiguous.md

  error-constants:
    label: '`bits/error_constants.h`: No such file or directory'
    summary: 'Error says "`bits/error_constants.h`: No such file or directory'
    page: /v6/compiletime/path-too-long.md

  print-ambiguous:
    label: call of overloaded `print(...)` is ambiguous
    summary: Error says "call of overloaded `print(...)` is ambiguous"
    page: /v6/compiletime/print-ambiguous.md

  cannot-bind-ref:
    label: cannot bind non-const lvalue reference ...
    summary: Error says "cannot bind non-const lvalue reference ..."
    page: cannot-bind-ref/index.md

  class-has-no-member-named-read:
    label: "`class Xxx` has no member named `read`"
    summary: Error says "`class Xxx` has no member named `read`"
    page: no-member-named-read.md

  pointer-to-object:
    label: '`const void*` is not a pointer-to-object type'
    summary: Error says "`const void*` is not a pointer-to-object type"
    page: /v6/compiletime/not-pointer-to-object.md

  doesnt-name-a-type:
    label: '`doc` does not name a type'
    summary: Error says "`doc` does not name a type"
    page: doesnt-name-a-type.md

  dynamicjsonbuffer:
    label: '`DynamicJsonBuffer` is a class from ArduinoJson 5'
    summary: Error says "`DynamicJsonBuffer` is a class from ArduinoJson 5"
    page: class-from-arduinojson5/index.md

  expected-identifier-before-string-constant:
    label: 'expected identifier before string constant'
    summary: Error says "expected identifier before string constant"
    page: /v6/compiletime/expected-identifier-before-string-constant.md

  char-pointer-conversion:
    label: invalid conversion from `const char*` to `char*` [-fpermissive]
    summary: Error says "invalid conversion from `const char*` to `char*` [-fpermissive]"
    page: /v6/compiletime/char-pointer-conversion.md

  invalid-conversion:
    label: invalid use of incomplete type `class InvalidConversion<...>`
    summary: Error says "invalid use of incomplete type `class InvalidConversion<...>`"
    page: /v6/compiletime/invalid-conversion/index.md

  jsondocument-not-declared:
    label: '`JsonDocument` was not declared in this scope'
    summary: Error says "`JsonDocument` was not declared in this scope"
    page: /v6/compiletime/not-declared-in-this-scope/no-arduinojson.md

  no-matching-function:
    label: no matching function for call to ...
    summary: Error says "no matching function for call to ..."
    page: no-matching-function/index.md

  passing-volatile-as-this-argument-discards-qualifiers:
    label: passing `volatile ...` as `this` argument discards qualifiers [-fpermissive]
    summary: Error says "passing `volatile ...` as `this` argument discards qualifiers [-fpermissive]"
    page: /v6/compiletime/passing-volatile-as-this-argument-discards-qualifiers.md

  cast-void-to-flashstringhelper:
    label: reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed
    summary: Error says "reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed"
    page: /v6/compiletime/cast-void-to-flashstringhelper.md

  request-for-member:
    label: request for member ...
    summary: Error says "request for member ..."
    page: /v6/compiletime/request-for-member/index.md

  staticjsonbuffer:
    label: '`StaticJsonBuffer` is a class from ArduinoJson 5'
    summary: Error says "`StaticJsonBuffer` is a class from ArduinoJson 5"
    page: class-from-arduinojson5/index.md

  struct-has-no-member-named-read:
    label: "`struct Xxx` has no member named `read`"
    summary: Error says "`struct Xxx` has no member named `read`"
    page: no-member-named-read.md

  range-based-for-requires-begin:
    label: this range-based `for` statement requires a suitable "begin" function and none was found
    summary: Error says "this range-based `for` statement requires a suitable "begin" function and none was found"
    page: /v6/compiletime/iterate-ambiguous.md

  not-in-list:
    label: None of the above
    summary:  The error is not in the list
    page: /unknown-error.md
---

Please look at the **first** error in the compiler output, and tell me what it is...
