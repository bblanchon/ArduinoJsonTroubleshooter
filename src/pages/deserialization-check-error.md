---
choices:
  - id: ok
    label: "`Ok`"
    next: deserialization-noerror
    summary: "`deserializeJson()` returns `Ok`"
  - id: emptyinput
    label: "`EmptyInput`"
    next: deserialization-emptyinput
    summary: "`deserializeJson()` returns `EmptyInput`"
  - id: incompleteinput
    label: "`IncompleteInput`"
    next: deserialization-incompleteinput
    summary: "`deserializeJson()` returns `IncompleteInput`"
  - id: invalidinput
    label: "`InvalidInput`"
    next: deserialization-invalidinput
    summary: "`deserializeJson()` returns `InvalidInput`"
  - id: nomemory
    label: "`NoMemory`"
    next: deserialization-nomemory
    summary: "`deserializeJson()` returns `NoMemory`"
  - id: notsupported
    label: "`NotSupported`"
    next: deserialization-notsupported
    summary: "`deserializeJson()` returns `NotSupported`"
  - id: toodeep
    label: "`TooDeep`"
    next: deserialization-toodeep
    summary: "`deserializeJson()` returns `TooDeep`"
  - id: crash
    label: "I can't tell because the program crashes"
    next: deserialization-crash
    summary: "The program crashes"
---

[`DeserializationError`]({% link v6/api/misc/deserializationerror.md %}) is the return type of [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}). It tells whether the operation succeeded and indicates the cause of the error.

Modify your program to show the error code, like so:

```c++
DeserializationError error = deserializeJson(doc, input);

Serial.print("deserializeJson() returned ");
Serial.println(error.c_str());
```

Now, what does it show?