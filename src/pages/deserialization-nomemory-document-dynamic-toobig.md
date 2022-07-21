---
choices:
  - id: success
    label: "Yes"
    summary: Reducing memory usage fixes the issue
    next: done
  - id: failure
    label: "No"
    summary: Reducing memory usage doesn't fix the issue
    next: deadend
--- 

Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.

Please read [How to reduce memory usage]({% link v6/how-to/reduce-memory-usage.md %}).
It shows several techniques you can use to use less RAM.
Hopefully, you'll make enough room for the memory pool.

Did this solve your issue?