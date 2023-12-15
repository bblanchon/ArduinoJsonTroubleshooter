---
options:
  success:
    label: "Yes"
    summary: Calling `DynamicJsonDocument`'s constructor in the class constructor fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Calling `DynamicJsonDocument`'s constructor in the class constructor doesn't fix the issue
    page: /deadend.md
---

This error occurs when you try to declare the member like so:

```c++
class MyStruct {
  DynamicJsonDocument doc(1024);
};
```

Indeed, this is not valid C++ syntax: you cannot call the constructor from the declaration of the member. Instead, you must call the member's constructor in the constructor of the class:

```c++
class MyStruct {
  DynamicJsonDocument doc;

  MyStruct() : doc(1024) {}
};
```

Did this solve this issue?
