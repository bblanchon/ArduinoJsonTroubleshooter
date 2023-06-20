---
options:
  success:
    label: "Yes"
    summary: Changing the file extension to `.cpp` fixes the error
    page: /done.md

  failure:
    label: "No"
    summary: Changing the file extension to `.cpp` doesn't fix the error
    page: /deadend.md
---

If you try to use ArduinoJson with a C compiler (or a C++ compiler targeting the C language), you'll get the following error message:

> ArduinoJson requires a C++ compiler, please change file extension to .cc or .cpp

Most of the time, this happens because you gave the extension `.c` to your main source file.  
To fix this issue, you must rename the extension to `.cpp` so the compiler understands you want to target the C++ language.

Did this solve your issue?
