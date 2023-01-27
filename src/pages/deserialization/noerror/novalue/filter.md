---
choices:
  - id: success
    label: "Yes"
    summary: Fixing the filter solves the issue
    next: /done
  - id: filter-ok
    label: "No"
    summary: Fixing the filter doesn't solve the issue
    next: print
---


Maybe the filter excludes the part that it should keep. Let's verify that it's doing its job correctly:

Please print the filter to the serial port like so:

```c++
serializeJsonPretty(filter, Serial);
```

Then, open the [ArduinoJson Assistant](/v6/assistant/):

* in step 1: choose "Deserialize and filter"
* in step 2:
  * in the "input" column, paste a sample input
  * in the "filter" column, paste the filter that your program just printed

The column "filtered input" shows the result of applying the filter to the input.  
Make sure the result is what you expect, and adjust the filter as needed.  
Once happy with the result, you can move to step 4 and copy the block that fills the filter.

Did this solve your issue?