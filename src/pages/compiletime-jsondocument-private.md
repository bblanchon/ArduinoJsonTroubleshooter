---
choices:
  - id: success
    label: "Yes"
    summary: Using a reference solves the issue
    next: done
  - id: failure
    label: "No"
    summary: Using a reference doesn't solve the issue
    next: deadend
---

[`JsonDocument`]({% link v6/api/jsondocument/index.md %}) doesn't support copying.

If you need to pass a [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) to a function, you can use a reference, like so:

```c++
void myFunction(JsonDocument& doc)
// or
void myFunction(const JsonDocument& doc)
```

You can even make this function more reusable by allowing it to support any part of a JSON document, like so:

```c++
void myFunction(JsonVariant var)
// or
void myFunction(JsonVariantConst var)
```

If you must make a copy, use either [`DynamicJsonDocument`]({% link v6/api/dynamicjsondocument/index.md %}) or [`StaticJsonDocument`]({% link v6/api/staticjsondocument/index.md %}).

Did this solve your issue?