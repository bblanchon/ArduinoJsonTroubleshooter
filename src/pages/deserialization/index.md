---
choices:
  - id: ok
    label: "`Ok`"
    next: /deserialization/noerror
    summary: "`deserializeJson()` returns `Ok`"
  - id: emptyinput
    label: "`EmptyInput`"
    next: /deserialization/emptyinput
    summary: "`deserializeJson()` returns `EmptyInput`"
  - id: incompleteinput
    label: "`IncompleteInput`"
    next: /deserialization/incompleteinput
    summary: "`deserializeJson()` returns `IncompleteInput`"
  - id: invalidinput
    label: "`InvalidInput`"
    next: /deserialization/invalidinput
    summary: "`deserializeJson()` returns `InvalidInput`"
  - id: nomemory
    label: "`NoMemory`"
    next: /deserialization/nomemory
    summary: "`deserializeJson()` returns `NoMemory`"
  - id: notsupported
    label: "`NotSupported`"
    next: /deserialization/notsupported
    summary: "`deserializeJson()` returns `NotSupported`"
  - id: toodeep
    label: "`TooDeep`"
    next: /deserialization/toodeep
    summary: "`deserializeJson()` returns `TooDeep`"
  - id: crash
    label: "I can't tell because the program crashes"
    next: /deserialization/crash
    summary: "The program crashes"
  - id: unknown
    label: I don't know what you're talking about
    next: /deserialization/check-error
    summary: The program doesn't check the error
---

What is the value of [`DeserializationError`](/v6/api/misc/deserializationerror/)?