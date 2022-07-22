---
choices:
 - id: success
   label: "Yes"
   summary: Calling `String::reserve()` solves the issue
   next: done
 - id: same-with-reserve
   label: "No"
   summary: Calling `String::reserve()` doesn't solve the issue
   next: deserialization-incompleteinput-string-stream
---

Please print the content of the string to the serial port, like so:

```c++
Serial.println(input);
```

You should see that the JSON document is truncated.
This can be caused by a lack of RAM: the string object failed to allocate a buffer large enough for the whole document.

This issue may come from [heap fragmentated](https://cpp4arduino.com/2018/11/06/what-is-heap-fragmentation.html).
Fixing this problem is very hard because it involve fixing the whole program, not just the JSON deserialization.

Yet, you can try to preallocate the buffer by calling [`String::reserve()`](https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/reserve/) before loading the content of the input, like so:

```c++
input.reserve(1024);  // adapt the value to the size of your input
```

Hopefully, you'll be able to reserve a buffer large enough to store the whole string.

Did this solve your issue?