---
options:
  cstr:
    label: "Yes"
    summary: The program uses `String::c_str()`
    page: string-cstr.md
  no-cstr:
    label: "No"
    summary: The program doesn't use `String::c_str()`
    page: /deadend.md
---

Did you call [`String::c_str()`](https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/) on the `String` object before passing it to `JsonDocument`?
