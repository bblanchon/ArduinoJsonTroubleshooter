---
options:
  utf8:
    label: "`239`"
    summary: Input's first byte suggests a UTF-8 BOM
    page: bom-utf8.md
  utf16:
    label: "`254` or `255`"
    summary: Input's first byte suggests a UTF-16 BOM
    page: bom-utf16.md
  no-bom:
    label: Something else
    summary: Input's first byte doesn't suggest a BOM
    page: bom-none.md
---

We must check that the JSON document is not preceded by a [Byte Order Mark](https://en.wikipedia.org/wiki/Byte_order_mark) (BOM).

To do this, we'll peek at the first byte in the file and print the value to the serial port. Insert the following line *before* the call to `deserializeJson()`:

```c++
Serial.println(file.peek());
```

What value does it print?
