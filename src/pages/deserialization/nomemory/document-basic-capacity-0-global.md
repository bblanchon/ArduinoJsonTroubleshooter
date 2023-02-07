---
options:
  - id: success
    label: "Yes"
    summary: Making `doc` local fixes the issue.
    next: /done
  - id: failure
    label: "No"
    summary: Making `doc` local doesn't fix the issue.
    next: /deadend
---

`doc.capacity()` returns `0`, which means `allocate()` returned `NULL`.

I think that, because `doc` is declared global, `allocate()` is called too early and the heap isn't ready.
I know this happens on ESP32 with the `SpiRamJsonDocument` shown in [How to use external RAM on ESP32?](/v6/how-to/use-external-ram-on-esp32/).

Please try to make `doc` a local variable.

Did this solve your issue?
