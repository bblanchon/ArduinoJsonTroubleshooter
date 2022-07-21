---
choices:
  - id: quote
    label: "Yes"
    summary: Input starts with double-quote
    next: deserialization-noerror-novalue-quote
  - id: no-quote
    label: "No"
    summary: Input doesn't start with quote
    next: deserialization-noerror-novalue-confusion
---

Please print the JSON input to the serial port.

Does the input starts with a double-quote character (`"`)?