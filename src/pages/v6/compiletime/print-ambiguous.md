---
options:
  success:
    label: "Yes"
    summary: Casting the value or using `serializeJson()` solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Neither casting the value nor using `serializeJson()` solves the issue
    page: /deadend.md
---

This error usually occurs when you pass a `JsonVariant` to [`Serial::print()`](https://www.arduino.cc/reference/en/language/functions/communication/serial/print/) or [`Serial::println()`](https://www.arduino.cc/reference/en/language/functions/communication/serial/println/).

To fix it, you need to explicitly cast the `JsonVariant` to a type supported by [`Serial::print()`](https://www.arduino.cc/reference/en/language/functions/communication/serial/print/), like so:

```c++
Serial.print(doc["event"].as<const char*>());
```

`JsonVariant` must contain (or more exactly "point to") a value of the specified type; otherwise, you'll get a default value, like `NULL` or `0`. If you want to support any type of value, you must replace the call to [`Serial::print()`](https://www.arduino.cc/reference/en/language/functions/communication/serial/print/) with a call to `serializeJson()`, like so:

```c++
serializeJson(doc["event"], Serial);
```

You can find more information on this error here: [call of overloaded 'println(...)' is ambiguous](/v6/error/call-of-overloaded-println-is-ambiguous/)

Did this solve your issue?
