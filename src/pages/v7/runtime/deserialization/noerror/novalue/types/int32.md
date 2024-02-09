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

This type can only store values between -2,147,483,648 and 2,147,483,647.  
If you try to extract a value outside this range, ArduinoJson will return 0.  
If that's your case, you must use a 64-bit integer type or a floating-point type.

Did this solve your issue?
