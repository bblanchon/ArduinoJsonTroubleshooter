---
choices:
  - id: quote
    label: A quote (`"`)
    summary: Serialized document starts with a quote
    next: deserialization/noerror/novalue-quote
  - id: bracket
    label: A square bracket (`[`)
    summary: Serialized document starts with a square bracket
    next: deserialization/noerror/novalue-confusion
  - id: brace
    label: A curly brace (`{`)
    summary: Serialized document starts with a curly brace
    next: deserialization/noerror/novalue-confusion
  - id: not-in-list
    label: None of the above
    summary: Serialized document starts with neither a quote, a bracket, nor a brace.
    next: deserialization/noerror/novalue-json-or-msgpack
---

Please print the content of the [`JsonDocument`](/v6/api/jsondocument/) to the serial port like so:

```c++
serializeJson(doc, Serial);
Serial.println(); // adds a line break (optional)
```

What's the first character?