---
choices:
  - id: utf8
    label: "`239`"
    summary: Input's first byte suggest an UTF-8 BOM
    next: deserialization-invalidinput-bom-utf8
  - id: utf16
    label: "`254` or `255`"
    summary: Input's first byte suggest an UTF-16 BOM
    next: deserialization-invalidinput-bom-utf16
  - id: no-bom
    label: Something else
    summary: Input's first byte doesn't suggest a BOM
    next: deserialization-invalidinput-bom-none
---

We must check that the JSON document is not preceded by a [Byte Order Mark](https://en.wikipedia.org/wiki/Byte_order_mark) (BOM).

To do this, we'll peek at the first byte in the file and print the value to the serial port. Insert the following line *before* the call to [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}):

```c++
Serial.println(file.peek());
```

What value does it print?