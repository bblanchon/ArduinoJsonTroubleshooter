---
choices:
  - id: no-dangling-ptr
    label: "Yes"
    summary: Removing dangling pointers doesn't prevent the crash
    next: deserialization/crash/before
  - id: success
    label: "No"
    summary: Removing dangling pointers prevents the crash
    next: done
---

Passing a dangling pointer could cause a crash.

If you pass a pointer to [`deserializeJson()`](/v6/api/json/deserializejson/), make sure that this pointer is still valid. For example, if the pointer is returned by a function, inspect the function to make sure pointer is not refering to a stack variable:

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

If you pass [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) to [`deserializeJson()`](/v6/api/json/deserializejson/), make sure you don't call `c_str()` in between:

```c++
// 💀 DON'T DO THAT!!!
const char* input = readInput().c_str();

// Possible workaround
String input = readInput();
```

Please review your code to make sure you're not passsing a dangling pointer to [`deserializeJson()`](/v6/api/json/deserializejson/).

Does your program still crash?