---
options:
  dangling-ptr:
    label: Yes, removing dangling pointers prevents the crash.
    summary: Removing dangling pointers prevents the crash
    page: /done.md
  no-dangling-ptr:
    label: No, the program still crashes even though no dangling pointer is passed to `deserializeJson()`.
    summary: No dangling pointer is passed to `deserializeJson()`
    page: before.md
---

The crash could be caused by a [dangling pointer](https://en.wikipedia.org/wiki/Dangling_pointer).

If you pass a pointer to `deserializeJson()`, make sure that this pointer is still valid.  
For example, if a function returns a pointer, make sure the pointer is not referring to a stack variable:

```c++
// 💀 DON'T DO THAT!!!
const char* readInput() {
  char buffer[256];
  // yada yada yada...
  return buffer;
}

// Possible workaround
String readInput() {
  String buffer;
  // yada yada yada...
  return buffer;
}
```

If you pass [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) to `deserializeJson()`, make sure you don't call `c_str()` in between:

```c++
// 💀 DON'T DO THAT!!!
const char* input = readInput().c_str();

// Possible workaround
String input = readInput();
```

Please review your code to ensure you don't pass a dangling pointer to `deserializeJson()`.

Did this solve your issue?
