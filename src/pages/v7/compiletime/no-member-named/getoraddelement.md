---
options:
  success:
    label: "Yes"
    summary: Replacing `getOrAddElement()` with `operator[]` and `to<JsonVariant>()` fixed the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `getOrAddElement()` with `operator[]` and `to<JsonVariant>()` didn't fix the issue
    page: /deadend.md
---

`getOrAddElement()` was an internal function not meant to be used in user code; it was removed in [ArduinoJson 6.20.0](https://arduinojson.org/news/2022/12/26/arduinojson-6-20-0/) in 2022.

You can fix your code by replacing `getOrAddElement()` with `operator[]` and `to<JsonVariant>()` like so:

```diff
- JsonVariant value = array.getOrAddElement(index);
+ JsonVariant value = idx < array.size() ? array[idx] : array[idx].to<JsonVariant>();
```

Did this solve your issue?
