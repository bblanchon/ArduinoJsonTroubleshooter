---
options:
  nul:
    label: "Yes"
    summary: Increasing `ARDUINOJSON_SLOT_OFFSET_SIZE` solves the issue
    page: /done.md
  no-nul:
    label: "No"
    summary: Increasing `ARDUINOJSON_SLOT_OFFSET_SIZE` doesn't solve the issue
    page: /deadend.md
---

Indeed, due to an optimization, a `JsonDocument` is limited in the number of nodes it can contain.
The following table shows the maximum number of nodes for each capacity:

| CPU architecture | Max nodes  |
|------------------|------------|
| 8-bit            | 127        |
| 32-bit           | 32767      |
| 64-bit           | 2147483647 |

{: .table }

You can increase this limit by increasing `ARDUINOJSON_SLOT_OFFSET_SIZE`.
However, doing will significantly increase memory consumption, so you'll need to increase the capacity of your `JsonDocument`.
Unfortunately, you cannot count on the ArduinoJson Assistant anymore.

Did this solve your issue?
