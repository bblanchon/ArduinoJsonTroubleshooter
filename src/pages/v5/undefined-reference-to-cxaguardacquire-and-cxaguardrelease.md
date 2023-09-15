---
options:
  success:
    label: "Yes"
    summary: Adding `-fno-threadsafe-statics` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Adding `-fno-threadsafe-statics` doesn't fix the issue
    page: /deadend.md
---

You need to add the following flag:

> `-fno-threadsafe-statics`
>
> Do not emit the extra code to use the routines specified in the C++ ABI for thread-safe initialization of local statics.
> You can use this option to reduce code size slightly in code that doesn't need to be thread-safe.
{:.alert .alert-info}

If you use the Arduino IDE, you need to edit the `platform.txt` of the board you're using:

* The file is located at `%LOCALAPPDATA%\Arduino15\papckages\<brand>\hardware\<board>\<version>\platform.txt`
* The line to change is `compiler.cpp.flags`

Did this solve your issue?
