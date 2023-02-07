---
options:
  - id: progmem
    label: "Yes"
    summary: Program uses `PROGMEM`
    next: progmem-cast
  - id: no-progmem
    label: "No"
    summary: Program doesn't use `PROGMEM`
    next: charptr
---

Do you use `PROGMEM` (Flash memory) in your program?