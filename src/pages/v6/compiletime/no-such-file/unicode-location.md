---
options:
  success:
    label: "Yes"
    summary: Renaming the folder fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Renaming the folder doesn't fix the issue
    page: /deadend.md
---

Arduino doesn't work well with Unicode characters in the sketchbook location.

Please rename the folder so it only contains ANSI characters, and update the Arduino IDE settings accordingly.

Did this solve your issue?
