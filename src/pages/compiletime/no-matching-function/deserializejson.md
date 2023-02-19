---
options:
  - id: success
    label: "Yes"
    summary: It's the "Most vexing parse"
    page: /done.md
  - id: failure
    label: "No"
    summary: It's not the "Most vexing parse"
    page: /deadend.md
---

This error happens when you write the following:

```c++
StaticJsonDocument<200> doc();
deserializeJson(doc, input);
```

Indeed, the first line doesn't declare a `StaticJsonDocument<200>` but a function that takes no argument and returns a `StaticJsonDocument<200>`. This is one of the most common pitfalls in C++ and it's called the [Most vexing parse](https://en.wikipedia.org/wiki/Most_vexing_parse).

To fix this program, you must remove the parentheses, like so:

```c++
StaticJsonDocument<200> doc;
deserializeJson(doc, input);
```

Did this solve your issue?