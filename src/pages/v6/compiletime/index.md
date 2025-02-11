---
tags: error-matcher
options:
  requires-cpp-compiler:
    label: ArduinoJson requires a C++ compiler...
    summary: Error says "ArduinoJson requires a C++ compiler..."
    regex: ArduinoJson requires a C\+\+ compiler
    page: requires-cpp-compiler.md

  assignment-of-read-only-location:
    label: assignment of read-only location
    summary: Error says "assignment of read-only location"
    regex: assignment of read-only location
    page: assignment-of-read-only-location.md

  ambiguous-string-assign:
    label: ambiguous overload for `operator=` (operand types are `String` and ...)
    summary: Error says "ambiguous overload for `operator=` (operand types are `String` and ...)"
    regex: ambiguous overload for 'operator=' \(operand types are 'String' and
    page: ambiguous-string-assign.md

  begin-not-found:
    label: '`begin`: no matching overloaded function found'
    summary: 'Error says "`begin`: no matching overloaded function found"'
    regex: "'begin': no matching overloaded function found"
    page: iterate-ambiguous.md

  print-ambiguous:
    label: call of overloaded `print(...)` is ambiguous
    summary: Error says "call of overloaded `print(...)` is ambiguous"
    regex: call of overloaded '(print|println)\(.*\)' is ambiguous
    page: print-ambiguous.md

  cannot-bind-object-ref:
    label: cannot bind non-const lvalue reference of type `ArduinoJson::JsonObject&` ...
    summary: Error says "cannot bind non-const lvalue reference of type `ArduinoJson::JsonObject&` ..."
    regex: cannot bind non-const lvalue reference
    page: objectref.md

  class-has-no-member-named-read:
    label: "`class Xxx` has no member named `read`"
    summary: Error says "`class Xxx` has no member named `read`"
    regex: class \S+ has no member named 'read'
    page: no-member-named-read.md

  pointer-to-object:
    label: '`const void*` is not a pointer-to-object type'
    summary: Error says "`const void*` is not a pointer-to-object type"
    regex: is not a pointer-to-object type
    page: not-pointer-to-object.md

  doesnt-name-a-type:
    label: '`doc` does not name a type'
    summary: Error says "`doc` does not name a type"
    regex: "'doc' does not name a type"
    page: doesnt-name-a-type.md

  dynamicjsonbuffer:
    label: '`DynamicJsonBuffer` is a class from ArduinoJson 5'
    summary: Error says "`DynamicJsonBuffer` is a class from ArduinoJson 5"
    regex: DynamicJsonBuffer is a class from ArduinoJson 5
    page: class-from-arduinojson5/index.md

  dynamicjsondocument-not-declared:
    label: '`DynamicJsonDocument` was not declared in this scope'
    summary: Error says "`DynamicJsonDocument` was not declared in this scope"
    regex: "'DynamicJsonDocument' was not declared in this scope"
    page: not-declared-in-this-scope/index.md

  expected-identifier-before-numeric-constant:
    label: 'expected identifier before numeric constant'
    summary: Error says "expected identifier before numeric constant"
    regex: expected identifier before numeric constant
    page: expected-identifier-before-numeric-constant.md

  expected-identifier-before-string-constant:
    label: 'expected identifier before string constant'
    summary: Error says "expected identifier before string constant"
    regex: expected identifier before string constant
    page: expected-identifier-before-string-constant.md

  char-pointer-conversion:
    label: invalid conversion from `const char*` to `char*` [-fpermissive]
    summary: Error says "invalid conversion from `const char*` to `char*` [-fpermissive]"
    regex: to 'char\*' \[-fpermissive\]
    page: char-pointer-conversion.md

  invalid-conversion:
    label: invalid use of incomplete type `class InvalidConversion<...>`
    summary: Error says "invalid use of incomplete type `class InvalidConversion<...>`"
    regex: invalid use of incomplete type 'class \S+InvalidConversion
    page: invalid-conversion/index.md

  jsondocument-copy-constructor-private:
    label: '`JsonDocument::JsonDocument(const JsonDocument&)` is private'
    summary: 'Error says "`JsonDocument::JsonDocument(const JsonDocument&)` is private"'
    regex: JsonDocument\(const JsonDocument&\)' is private
    page: jsondocument-private.md

  jsondocument-constructor:
    label: '`JsonDocument::JsonDocument()` is protected within this context'
    summary: Error says "`JsonDocument::JsonDocument()` is protected within this context"
    regex: JsonDocument\(\)' is protected within this context
    page: jsondocument-protected.md

  macro-min:
    label: macro `min` passed 3 arguments, but takes just 2
    summary: Error says "macro `min` passed 3 arguments, but takes just 2"
    regex: macro 'min' passed 3 arguments, but takes just 2
    page: macro-min.md

  basicjsondocument-default-constructor:
    label: no default constructor exists for class `BasicJsonDocument`
    summary: Error says "no default constructor exists for class `BasicJsonDocument`"
    page: basicjsondocument-default-constructor.md

  no-matching-function:
    label: no matching function for call to ...
    summary: Error says "no matching function for call to ..."
    regex: no matching function for call to
    page: no-matching-function/index.md

  no-such-file:
    label: No such file or directory
    summary: 'Error says "No such file or directory"'
    regex: No such file or directory
    page: no-such-file/index.md

  passing-volatile-as-this-argument-discards-qualifiers:
    label: passing `volatile ...` as `this` argument discards qualifiers [-fpermissive]
    summary: Error says "passing `volatile ...` as `this` argument discards qualifiers [-fpermissive]"
    regex: passing 'volatile .*' as 'this' argument discards qualifiers
    page: passing-volatile-as-this-argument-discards-qualifiers.md

  cast-void-to-flashstringhelper:
    label: reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed
    summary: Error says "reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed"
    regex: reinterpret_cast from 'const void' to 'const __FlashStringHelper \*' is not allowed
    page: cast-void-to-flashstringhelper.md

  request-for-member:
    label: request for member ...
    summary: Error says "request for member ..."
    regex: request for member
    page: request-for-member/index.md

  staticjsonbuffer:
    label: '`StaticJsonBuffer` is a class from ArduinoJson 5'
    summary: Error says "`StaticJsonBuffer` is a class from ArduinoJson 5"
    regex: StaticJsonBuffer is a class from ArduinoJson 5
    page: class-from-arduinojson5/index.md

  staticjsondocument-not-declared:
    label: '`StaticJsonDocument` was not declared in this scope'
    summary: Error says "`StaticJsonDocument` was not declared in this scope"
    regex: "'StaticJsonDocument' was not declared in this scope"
    page: not-declared-in-this-scope/index.md

  struct-has-no-member-named-read:
    label: "`struct Xxx` has no member named `read`"
    summary: Error says "`struct Xxx` has no member named `read`"
    regex: struct \S+ has no member named 'read'
    page: no-member-named-read.md

  range-based-for-requires-begin:
    label: this range-based `for` statement requires a suitable "begin" function and none was found
    summary: Error says "this range-based `for` statement requires a suitable "begin" function and none was found"
    regex: this range-based 'for' statement requires a suitable "begin" function and none was found
    page: iterate-ambiguous.md

  jsondocument-copy-constructor-deleted:
    label: use of deleted function 'JsonDocument::JsonDocument(const JsonDocument&)'
    summary: Error says "use of deleted function 'JsonDocument::JsonDocument(const JsonDocument&)'"
    regex: use of deleted function '.*JsonDocument::JsonDocument\(const .*JsonDocument&\)'
    page: jsondocument-private.md

  not-in-list:
    label: None of the above
    summary:  The error is not in the list
    regex: .*
    page: /unknown-error.md
---

Please look at the **first** error in the compiler output, and tell me what it is...
