---
options:
  failure:
    label: Yes, I could stop the crash by commenting out some parts of the code.
    summary: Commenting parts of the code prevents the crash
    page: /done.md
  success:
    label: No, I commented out all I could and the program still crashes.
    summary: Commenting the rest of the code doesn't prevent the crash
    page: /deadend.md
---

The crash could also be caused by an [undefined behavior](https://en.wikipedia.org/wiki/Undefined_behavior) elsewhere in your program.

Please comment out pieces of code until the program stops crashing.  
Keep the call to `deserializeJson()` and the code around it.

Could you stop the crash?
