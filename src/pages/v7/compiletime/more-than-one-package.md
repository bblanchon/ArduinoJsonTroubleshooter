---
options:
  success:
    label: "Yes"
    summary: Updating `lib_deps` solved the issue
    page: /done.md
  failure:
    label: "No"
    summary: Updating `lib_deps` didn't solve the issue
    page: /deadend.md
---

This error occurs when PlatformIO tries to install the ArduinoJson library but it finds multiple matches.  
To solve this issue, you must specify the full name of the library to disambiguate the installation.

Edit the `platformio.ini` file and add the full name of the library to the `lib_deps` option.

```diff
- lib_deps = ArduinoJson
+ lib_deps = bblanchon/ArduinoJson
```

Did this solve your issue?
