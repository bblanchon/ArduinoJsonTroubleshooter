---
options:
  - id: success
    label: "Yes"
    summary: Moving statement to `setup()` fixes the issue
    page: /done.md
  - id: failure
    label: "No"
    summary: Moving statement to `setup()` doesn't fix the issue
    page: /deadend.md
---

This error usually occurs when you write statements at the global scope, which isn't possible in C++.

Unlike many popular languages like Python or JavaScript, the C++ language doesn't allow statements at the global scope.
Instead, you must move all statements into a function.
The entry point for a regular C++ program is the `main()` function, but in an Arduino program, it's the `setup()` function.

For example, if your program is like this:

```c++
StaticJsonDocument<200> doc;
doc["hello"] = "world";
serializeJson(doc, Serial);
```

...you must rewrite it like this:

```c++
void setup() {
  StaticJsonDocument<200> doc;
  doc["hello"] = "world";
  serializeJson(doc, Serial);
}
```

Did this solve your issue?