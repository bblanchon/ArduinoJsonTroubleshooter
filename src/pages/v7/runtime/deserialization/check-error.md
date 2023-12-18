---
options:
  ok:
    label: "`Ok`"
    page: noerror/index.md
    summary: "`deserializeJson()` returns `Ok`"
  emptyinput:
    label: "`EmptyInput`"
    page: emptyinput/index.md
    summary: "`deserializeJson()` returns `EmptyInput`"
  incompleteinput:
    label: "`IncompleteInput`"
    page: incompleteinput/index.md
    summary: "`deserializeJson()` returns `IncompleteInput`"
  invalidinput:
    label: "`InvalidInput`"
    page: invalidinput/index.md
    summary: "`deserializeJson()` returns `InvalidInput`"
  nomemory:
    label: "`NoMemory`"
    page: nomemory.md
    summary: "`deserializeJson()` returns `NoMemory`"
  toodeep:
    label: "`TooDeep`"
    page: /v6/runtime/deserialization/toodeep.md
    summary: "`deserializeJson()` returns `TooDeep`"
---

`DeserializationError` is the return type of `deserializeJson()`. It tells whether the operation succeeded and indicates the cause of the error.

Modify your program to show the error code, like so:

```c++
DeserializationError error = deserializeJson(doc, input);

Serial.print("deserializeJson() returned ");
Serial.println(error.c_str());
```

Now, what does it show?
