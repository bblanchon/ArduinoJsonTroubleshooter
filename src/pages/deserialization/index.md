---
options:
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
  - id: unknown
    label: I don't know what you're talking about
    next: check-error
    summary: The program doesn't check the error
---

What is the value of [`DeserializationError`](/v6/api/misc/deserializationerror/)?