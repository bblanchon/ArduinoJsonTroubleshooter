---
options:
  success:
    label: "Yes"
    summary: Fixing the filter solves the issue
    page: /done.md
  assistant:
    label: "No"
    summary: Fixing the filter doesn't solve the issue
    page: ../print.md
---

Maybe the filter excludes the part that it should keep. Let's verify that it's doing its job correctly.

Open the [ArduinoJson Assistant](/v7/assistant/):

* in step 1: choose "Deserialize and filter"
* in step 2:
  * in the "input" column, paste a sample input
  * in the "filter" column, paste the filter that your program just printed

The column "filtered input" shows the result of applying the filter to the input.  
Make sure the result is what you expect, and adjust the filter as needed.  
Once happy with the result, you can move to step 4 and copy the block that fills the filter.

Did this solve your issue?
