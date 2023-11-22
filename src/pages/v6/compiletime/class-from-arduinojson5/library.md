---
options:
  success:
    label: "Yes"
    summary: Installing ArduinoJson 5 fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Installing ArduinoJson 5 doesn't fix the issue
    page: /deadend.md
---

Since you cannot upgrade the code of the library depending on ArduinoJson, the simplest solution is to downgrade ArduinoJson to version 5.

On the Arduino IDE, click on the Library Manager icon, then search ArduinoJson and install version 5.13.5.

Did this solve your issue?
