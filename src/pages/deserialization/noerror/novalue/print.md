---
options:
  - id: quote
    label: A quote (`"`)
    summary: Serialized document starts with a quote
    page: quote.md
  - id: bracket
    label: A square bracket (`[`)
    summary: Serialized document starts with a square bracket
    page: confusion.md
  - id: brace
    label: A curly brace (`{`)
    summary: Serialized document starts with a curly brace
    page: confusion.md
  - id: not-in-list
    label: None of the above
    summary: Serialized document starts with neither a quote, a bracket, nor a brace.
    page: json-or-msgpack.md
---

Please print the content of the [`JsonDocument`](/v6/api/jsondocument/) to the serial port like so:

```c++
serializeJson(doc, Serial);
Serial.println(); // adds a line break (optional)
```

What's the first character?