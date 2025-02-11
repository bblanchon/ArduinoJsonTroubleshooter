---
options:
  arduino-string-ptr:
    label: which is of pointer type `arduino::String*`
    summary: Error says "which is of pointer type `arduino::String*`"
    regex: which is of pointer type 'arduino::String\*'
    page: string-ptr.md

  std-string-ptr:
    label: which is of pointer type `std::__cxx11::basic_string<char>*`
    summary: Error says "which is of pointer type `std::__cxx11::basic_string<char>*`"
    regex: which is of pointer type '.*basic_string<char>\*'
    page: std-string-ptr.md

  string-ptr:
    label: which is of pointer type `String*`
    summary: Error says "which is of pointer type `String*`"
    regex: which is of pointer type 'String\*'
    page: string-ptr.md
  
  not-in-list:
    label: None of the above
    summary:  The error is not in the list
    regex: .*
    page: other.md
---

Look carefully at the error message, does it contain one of the following phrases?
