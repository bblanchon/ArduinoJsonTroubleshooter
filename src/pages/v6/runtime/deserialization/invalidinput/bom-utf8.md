---
options:
  success:
    label: "Yes"
    summary: Skipping the first 3 bytes solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Skipping the first 3 bytes doesn't solve the issue
    page: /deadend.md
---

`239` is the first by of the UTF-8 [Byte Order Mark](https://en.wikipedia.org/wiki/Byte_order_mark) (BOM).

ArduinoJson doesn't skip the BOM, you need to do it in your program by adding the following lines **before** calling `deserializeJson()`:

```c++
// skip BOM
stream.read();  // 0xEF
stream.read();  // 0xBB
stream.read();  // 0xBF
```

Admitedly, this is quite hacky, so I recommend that you try to fix the server which should not include a BOM anyway.

Did this fix your problem?
