---
choices:
  - id: progmem
    label: "Yes"
    summary: Program uses `PROGMEM`
    next: /serialization/crash/progmem-cast
  - id: no-progmem
    label: "No"
    summary: Program doesn't use `PROGMEM`
    next: /serialization/crash/charptr
---

Do you use `PROGMEM` (Flash memory) in your program?