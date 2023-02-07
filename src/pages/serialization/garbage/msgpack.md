---
options:
  - id: json
    label: "Yes, `serializeJson()` produces garbage too"
    summary: "`serializeJson()` produces garbage too"
    next: json
  - id: deserialize-no
    label: "No, `serializeJson()` doesn't produces garbage"
    summary: "`serializeJson()` doesn't produces garbage"
    next: msgpack-only
---

[MessagePack](https://msgpack.org/) is a binary format, so if you print a document to the serial port, the result would look weird.

For example, the following program:

```c++
StaticJsonDocument<256> doc;
doc["val"] = 42;
serializeMsgPack(doc, Serial);
```

produces:

```text
⸮⸮val*
```

Yes. This is the expected result.

Now that this question is cleared, let's move on with the diagnostic.

I need you to edit your program to replace [`serializeMsgPack()`](/v6/api/msgpack/serializemsgpack/) with [`serializeJson()`](/v6/api/json/serializejson/).

Do you see the garbage in the JSON output?