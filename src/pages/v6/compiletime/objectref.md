---
options:
  success:
    label: "Yes"
    summary: Replacing `JsonObject&` with `JsonObject` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `JsonObject&` with `JsonObject` doesn't fix the issue
    page: /deadend.md
---


In your program, there is a line that look like this:

```c++
JsonObject& obj = doc["key"].as<JsonObject>();
```

This line produces the following compilation error:

```text
cannot bind non-const lvalue reference of type 'ArduinoJson::JsonObject&' {aka 'ArduinoJson6185_91::ObjectRef&'} to an rvalue of type 'ArduinoJson6185_91::enable_if<true, ArduinJson6185_91::ObjectRef>::type' {aka 'ArduinoJson6185_91::ObjectRef'}
```

In other words, "cannot assign `JsonObject` to `JsonObject&`".
The compiler refuses to save a reference to a temporary variable because the reference would inevitably dangle.

To fix this issue, you must remove the ampersand (`&`) after `JsonObject`, like so:

```c++
JsonObject obj = doc["key"].as<JsonObject>();
```

Did this solve your issue?
