---
options:
  success:
    label: "Yes"
    summary: Increasing the limit fixes the issue
    page: /done.md
  limit-increased:
    label: "No"
    summary: Increasing the limit doesn't fix the issue
    page: /deadend.md
---

[`TooDeep`](/v6/api/misc/deserializationerror/#toodeep) means that the input document has too many levels of nesting.

[`deserializeJson()`](/v6/api/json/deserializejson/) is implemented with a recursive function: it's fast, small, and efficient, but it can cause a stack-overflow if the input document has too many levels. To protect your program against malicious input that could trigger a stack-overflow on purpose, ArduinoJson sets a limit on how many levels it accepts.

The default nesting limit is configured by [`ARDUINOJSON_DEFAULT_NESTING_LIMIT`](/v6/api/config/default_nesting_limit/), which is set to `10` by default. To increase the limit, you can change this setting, or you can pass an extra argument to [`deserializeJson()`](/v6/api/json/deserializejson/), like so:

```c++
deserializeJson(doc, input, DeserializationOption::NestingLimit(20));
```

The [ArduinoJson Assistant](/v6/assistant/) shows an alert when your input overpasses the default limit and includes the appropriate `DeserializationOption::NestingLimit` in the sample program.

Did this solve your issue?
