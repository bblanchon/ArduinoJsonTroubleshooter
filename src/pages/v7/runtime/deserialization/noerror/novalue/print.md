---
options:
  quote:
    label: A quote (`"`)
    summary: Serialized document starts with a quote
    page: quote.md
  bracket:
    label: A square bracket (`[`)
    summary: Serialized document starts with a square bracket
    page: confusion.md
  brace:
    label: A curly brace (`{`)
    summary: Serialized document starts with a curly brace
    page: confusion.md
  not-in-list:
    label: None of the above
    summary: Serialized document starts with neither a quote, a bracket, nor a brace.
    page: json-or-msgpack.md
---

Please print the content of the [`JsonDocument`](/v7/api/jsondocument/) to the serial port like so:

```c++
serializeJson(doc, Serial);
Serial.println(); // adds a line break (optional)
```

What's the first character?
