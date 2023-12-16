---
options:
  success:
    label: "Yes"
    summary: Garbage characters follow the input
    page: /done.md
  lint:
    label: "No"
    summary: No garbage characters follow the input
    page: ../jsonlint.md
---

[`deserializeJson()`](/v6/api/json/deserializejson/) stops reading as soon as the JSON document ends.
In your case, it will read the input until it reaches the matching `"` and ignore any remaining characters.

Suppose the input looks like this:

```json
"hello"GARBAGE
```

Here, [`deserializeJson()`](/v6/api/json/deserializejson/) reads the JSON string `"hello"` and returns `Ok` ignoring the `GARBAGE` part.

This feature enables:

1. [deserializing in chunks](/v6/how-to/deserialize-a-very-large-document/#deserialization-in-chunks),
2. parsing [JSON Streams](https://en.wikipedia.org/wiki/JSON_streaming),
3. reading from non-zero-terminated input strings.

Did this solve your issue?
