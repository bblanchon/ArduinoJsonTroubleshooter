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

This error occurs when you try to assign a [`JsonVariant`](/v6/api/jsonvariant/) to a {% include links/arduino/string/class %}.

Indeed, due to the way these two classes are defined, you can *construct* a {% include links/arduino/string/class %} from a [`JsonVariant`](/v6/api/jsonvariant/), but you cannot *assign* a [`JsonVariant`](/v6/api/jsonvariant/) to an existing string.

```
String name = doc["name"];  // contruction -> works
name = doc["name"];         // assignment  -> fails
```

You can easily workaround this problem by explicitly casting the [`JsonVariant`](/v6/api/jsonvariant/), like so:

```
name = doc["name"].as<String>();
```

Please see [error: ambiguous overload for 'operator=' (operand types are 'String' and ...)](/v6/error/ambiguous-overload-for-operator-equal/) for details.

Did this solve your issue?