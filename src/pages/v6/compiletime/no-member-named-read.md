---
options:
  success:
    label: "Yes"
    summary: Passing a supported input type to `deserializeJson()` fixed the issue
    page: /done.md
  failure:
    label: "No"
    summary: Passing a supported input type to `deserializeJson()` didn't fix the issue
    page: /deadend.md
---

This error occurs when you pass an invalid input type to `deserializeJson()`.

For example, if you write this:

```c++
class Input {
  // ...
};

void parseInput(Input input) {
  StaticJsonDocument<200> doc;
  deserializeJson(doc, input);
  // ...
}
```

You'll get a long compiler output that includes this error:

```text
ArduinoJson/Deserialization/Reader.hpp:21:21: error: 'class Input' has no member named 'read'
     return source_->read();  // Error here? You passed an unsupported input type
```

Please double-check that you called `deserializeJson()` with the right arguments.

If you do want to read from an unsupported input type (like `Input` in the example above), you must implement `read()` and `readBytes()` in this class or an [adapter class](https://en.wikipedia.org/wiki/Adapter_pattern).
Please see [custom readers](/v6/api/json/deserializejson/#custom-reader) for more details.

Did this solve your issue?
