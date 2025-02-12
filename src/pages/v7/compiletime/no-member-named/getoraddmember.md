---
options:
  success:
    label: "Yes"
    summary: Replacing `getOrAddMember()` with `containsKey()`, `operator[]`, and `to<JsonVariant>()` fixed the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `getOrAddMember()` with `containsKey()`, `operator[]`, and `to<JsonVariant>()` didn't fix the issue
    page: /deadend.md
---

`getOrAddMember()` was an internal function not meant to be used in user code; it was removed in [ArduinoJson 6.20.0](https://arduinojson.org/news/2022/12/26/arduinojson-6-20-0/) in 2022.

You can fix your code by replacing `getOrAddMember()` with `containsKey()`, `operator[]`, and `to<JsonVariant>()` like so:

```diff
- JsonVariant value = object.getOrAddMember(index);
+ JsonVariant value = object.containsKey(key) ? object[key] : object[key].to<JsonVariant>();
```

Did this solve your issue?
