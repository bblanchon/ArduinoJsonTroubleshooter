---
options:
  cstr:
    label: "Yes"
    summary: The `const char*` comes from `.c_str()`
    page: string-cstr.md
  not-cstr:
    label: "No"
    summary: The `const char*` doesn't come from `.c_str()`
    page: const-char-ptr-not-cstr.md
---

Does this `const char*` come from calling `.c_str()` on a `String` object?
