---
choices:
  - id: ok
    label: "`Ok`"
    next: noerror
    summary: "`deserializeJson()` returns `Ok`"
  - id: emptyinput
    label: "`EmptyInput`"
    next: emptyinput
    summary: "`deserializeJson()` returns `EmptyInput`"
  - id: incompleteinput
    label: "`IncompleteInput`"
    next: incompleteinput
    summary: "`deserializeJson()` returns `IncompleteInput`"
  - id: invalidinput
    label: "`InvalidInput`"
    next: invalidinput
    summary: "`deserializeJson()` returns `InvalidInput`"
  - id: nomemory
    label: "`NoMemory`"
    next: nomemory
    summary: "`deserializeJson()` returns `NoMemory`"
  - id: notsupported
    label: "`NotSupported`"
    next: notsupported
    summary: "`deserializeJson()` returns `NotSupported`"
  - id: toodeep
    label: "`TooDeep`"
    next: toodeep
    summary: "`deserializeJson()` returns `TooDeep`"
  - id: crash
    label: "I can't tell because the program crashes"
    next: crash
    summary: "The program crashes"
---

[`DeserializationError`](/v6/api/misc/deserializationerror/) is the return type of [`deserializeJson()`](/v6/api/json/deserializejson/). It tells whether the operation succeeded and indicates the cause of the error.

Modify your program to show the error code, like so:

```c++
DeserializationError error = deserializeJson(doc, input);

Serial.print("deserializeJson() returned ");
Serial.println(error.c_str());
```

Now, what does it show?