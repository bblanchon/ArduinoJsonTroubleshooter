---
options: 
  success:
    label: "Yes"
    summary: Switching to `DynamicJsonDocument` fixes the issue
    page: /done.md
  dynamicjsondocument-tried:
    label: "No"
    summary: Switching to `DynamicJsonDocument` doesn't fix the issue
    page: progmem.md
---

Because a `StaticJsonDocument` resides on the stack, it may cause a [stack-overflow](https://en.wikipedia.org/wiki/Stack_buffer_overflow).

Some platforms can detect stack overflows, in which case they raise an exception; others let the program do nothing and let the program crash on its own.
The tricky part with stack overflows is that the program doesn't always crash; it can also expose all kind of weird behavior.

If you have no idea of what I'm talking about, please have a look a "The missing C++ course" in [Mastering ArduioJson](/book/), it explains the roles of the different areas of memory, as well as many other important stuffs.

Please switch to a `DynamicJsonDocument`

Did this solve your issue?
