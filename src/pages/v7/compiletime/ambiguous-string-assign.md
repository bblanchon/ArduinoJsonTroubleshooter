---
options:
  success:
    label: "Yes"
    summary: Casting the `JsonVariant` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Casting the `JsonVariant` doesn't fix the issue
    page: /deadend.md
---

This error occurs when you try to assign a [`JsonVariant`](/v7/api/jsonvariant/) to a [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/).

Indeed, due to the way these two classes are defined, you can *construct* a [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) from a [`JsonVariant`](/v7/api/jsonvariant/), but you cannot *assign* a [`JsonVariant`](/v7/api/jsonvariant/) to an existing string.

```c++
String name = doc["name"];  // contruction -> works
name = doc["name"];         // assignment  -> fails
```

You can easily workaround this problem by explicitly casting the [`JsonVariant`](/v7/api/jsonvariant/), like so:

```c++
name = doc["name"].as<String>();
```

Did this solve your issue?
