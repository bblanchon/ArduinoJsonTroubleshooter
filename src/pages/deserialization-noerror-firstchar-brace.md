---
choices:
  - id: success
    label: "Yes"
    summary: Garbage characters follow the input
    next: done
  - id: lint
    label: "No"
    summary: No garbage characters follow the input
    next: deserialization-noerror-jsonlint
---

[`deserializeJson()`](/v6/api/json/deserializejson/) stops reading as soon as the JSON document ends.
In your case, it will read the input until it reaches the matching `}` and ignore any remaining characters.


Suppose the input looks like this:

```json
{"key":"value"}GARBAGE
```

Here, [`deserializeJson()`](/v6/api/json/deserializejson/) reads the JSON object `{"key":"value"}` and returns `Ok` ignoring the `GARBAGE` part.

This feature enables [deserializing in chunks](/v6/how-to/deserialize-a-very-large-document/#deserialization-in-chunks) and allows non-zero-terminated input strings.

Did this solve your issue?