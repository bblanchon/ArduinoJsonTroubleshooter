---
options:
  success:
    label: "Yes"
    summary: Replacing `char` with `int8_t` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Replacing `char` with `int8_t` doesn't fix the issue
    page: /deadend.md
---

This error happens when you write the following:

```c++
Serial.println(doc["key"].as<char*>());
// or
char value = doc["key"];
```

Indeed, support for `char` was deprecated in [6.18](/news/2021/05/04/version-6-18-0/) and removed in [6.20](/news/2022/12/26/arduinojson-6-20-0/).

To fix this error, you must replace `char` with `int8_t`, `uint8_t`, or any other integral type, like so:

```c++
Serial.println(doc["key"].as<int8_t>());
// or
int8_t value = doc["key"];
```

Did this solve your issue?
