---
choices:
  - id: success
    label: "Yes"
    summary: Casting the `JsonVariant` fixes the issue
    next: done
  - id: failure
    label: "No"
    summary: Casting the `JsonVariant` doesn't fix the issue
    next: deadend
---

This error occurs when you try to assign a [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}) to a {% include links/arduino/string/class %}.

Indeed, due to the way these two classes are defined, you can *construct* a {% include links/arduino/string/class %} from a [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}), but you cannot *assign* a [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}) to an existing string.

```
String name = doc["name"];  // contruction -> works
name = doc["name"];         // assignment  -> fails
```

You can easily workaround this problem by explicitly casting the [`JsonVariant`]({% link v6/api/jsonvariant/index.md %}), like so:

```
name = doc["name"].as<String>();
```

Please see [error: ambiguous overload for 'operator=' (operand types are 'String' and ...)]({% link v6/error/ambiguous-overload-for-operator-equal.md %}) for details.

Did this solve your issue?