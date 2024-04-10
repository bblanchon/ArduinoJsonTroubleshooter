---
options:
  string:
    label: "`String`"
    summary: The variable that ends up with garbage data is a `String`
    page: string.md
  const-char-ptr:
    label: "`const char*`"
    summary: The variable that ends up with garbage data is a `const char*`
    page: const-char-ptr.md
  char-ptr:
    label: "`char*`"
    summary: The variable that ends up with garbage data is a `char*`
    page: /deadend.md
  other:
    label: None of the above
    summary: The variable that ends up with garbage data is neither a `String`, nor a `const char*`, nor a `char*`
    page: /deadend.md
---

What is the type of the variable that ends up with garbage data?
