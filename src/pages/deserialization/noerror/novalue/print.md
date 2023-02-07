---
options:
  - id: quote
    label: A quote (`"`)
    summary: Serialized document starts with a quote
    next: quote
  - id: bracket
    label: A square bracket (`[`)
    summary: Serialized document starts with a square bracket
    next: confusion
  - id: brace
    label: A curly brace (`{`)
    summary: Serialized document starts with a curly brace
    next: confusion
  - id: not-in-list
    label: None of the above
    summary: Serialized document starts with neither a quote, a bracket, nor a brace.
    next: json-or-msgpack
---

Please print the content of the [`JsonDocument`](/v6/api/jsondocument/) to the serial port like so:

```c++
serializeJson(doc, Serial);
Serial.println(); // adds a line break (optional)
```

What's the first character?