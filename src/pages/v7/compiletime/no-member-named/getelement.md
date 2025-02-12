---
options:
  success:
    label: "Yes"
    summary: Replacing `getElement()` with `operator[]` fixed the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `getElement()` with `operator[]` didn't fix the issue
    page: /deadend.md
---

`getElement()` was an internal function not meant to be used in user code; it was removed in [ArduinoJson 6.20.0](https://arduinojson.org/news/2022/12/26/arduinojson-6-20-0/) in 2022.

You can fix your code by replacing `getElement()` with `operator[]` like so:

```diff
- JsonVariant value = array.getElement(index);
+ JsonVariant value = array[index];
```

Did this solve your issue?
