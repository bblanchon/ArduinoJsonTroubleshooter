---
options:
  success:
    label: "Yes"
    summary: Switching to a larger integer type solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Switching to a larger integer type doesn't solve the issue
    page: /deadend.md
---

This type can only store values between 0 and 65,535.  
If you try to extract a value outside this range, ArduinoJson will return 0.  
If that's your case, you must use a larger integer type.

Did this solve your issue?
