---
options:
  success:
    label: "Yes"
    summary: Replacing `getMember()` with `operator[]` fixed the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `getMember()` with `operator[]` didn't fix the issue
    page: /deadend.md
---

`getMember()` was an internal function not meant to be used in user code; it was removed in [ArduinoJson 6.20.0](https://arduinojson.org/news/2022/12/26/arduinojson-6-20-0/) in 2022.

You can fix your code by replacing `getMember()` with `operator[]` like so:

```diff
- JsonVariant value = object.getMember(key);
+ JsonVariant value = object[key];
```

Did this solve your issue?
