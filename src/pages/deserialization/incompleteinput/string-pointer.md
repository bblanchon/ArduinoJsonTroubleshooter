---
choices:
 - id: success
   label: "Yes"
   summary: Increasing the buffer size solves the issue
   next: done
 - id: larger-buffer
   label: "No"
   summary: Increasing the buffer size doesn't solve the issue
   next: deserialization/incompleteinput/string-stream
---

I'll assume that your input is stored in a buffer similar to this one:

```c++
char input[1024];
size_t input_size;
```

Please print the content of the string to the serial port, like so:

```c++
Serial.write(input, input_size);
```

You should see that the JSON document is truncated.
This is probably caused by the size of the buffer: it's too small to store the complete document.

Please increase the capacity of the buffer, but remember that the size of the stack is limited so you may need to move your buffer to the heap.

Did this solve your issue?