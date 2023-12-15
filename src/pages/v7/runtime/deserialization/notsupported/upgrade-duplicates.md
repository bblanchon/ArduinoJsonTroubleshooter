---
options:
  success:
    label: "Yes"
    summary: Removing duplicates fixes the issue
    page: /done.md
  duplicates-removed:
    label: "No"
    summary: Removing duplicates doesn't fix the issue
    page: unicode.md
---

If you're still seeing `NotSupported` after upgrading the library, it means that your code is not using the upgraded library.

Several versions of ArduinoJson are installed on your machine; you must either:

* removed the duplicates
* upgrade the duplicates
* make sure your project uses the right one

To find the duplicates, run a disk search for a file named `ArduinoJson.h`.

Did this solve your issue?
