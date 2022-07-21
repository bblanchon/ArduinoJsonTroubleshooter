---
choices: 
  - id: success
    label: "Yes"
    summary: Switching to `DynamicJsonDocument` fixes the issue
    next: done
  - id: dynamicjsondocument-tried
    label: "No"
    summary: Switching to `DynamicJsonDocument` doesn't fix the issue
    next: serialization-crash-progmem
---

Because a [`StaticJsonDocument`]({% link v6/api/staticjsondocument/index.md %}) resides on the stack, it may cause a [stack-overflow](https://en.wikipedia.org/wiki/Stack_buffer_overflow).

Some platforms can detect stack overflows, in which case they raise an exception; others let the program do nothing and let the program crash on its own.
The tricky part with stack overflows is that the program doesn't always crash; it can also expose all kind of weird behavior.

If you have no idea of what I'm talking about, please have a look a "The missing C++ course" in [Mastering ArduioJson]({% link book/index.md %}), it explains the roles of the different areas of memory, as well as many other important stuffs.

Please switch to a [`DynamicJsonDocument`]({% link v6/api/dynamicjsondocument/index.md %})

Did this solve your issue?