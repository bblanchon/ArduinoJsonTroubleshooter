---
options:
  success:
    label: "Yes"
    summary: Removing CRLF fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Removing CRLF doesn't fix the issue
    page: /deadend.md
---

`deserializeJson()` also returns `EmptyInput` when the input contains only spaces.

For example, this can happen when you call `deserializeJson()` repeatedly and there are spaces (or line breaks) between the documents. Suppose you use the following program to parse JSON input from the serial port:

```c++
void loop() {
  // wait from an incoming message
  while (Serial.available() == 0)
    delay(100);
    
  JsonDocument doc;
  DeserializationError err = deserializeJson(doc, Serial);
  
  ...
}
```

If you use the default settings of the Arduino Serial Monitor, `err` will contains `Ok` and then `EmptyInput` each time you press "Send".

Indeed, by default the Arduino Serial Monitor appends [CRLF](https://fr.wikipedia.org/wiki/Carriage_Return_Line_Feed) at the end of the message, so when you enter `{"hello":"world"}` in the input box, what is really sent is `{"hello":"world"}\r\n`.
Since `deserializeJson()` stops reading immediately at the end of the object, the `\r\n` remains in the serial buffer.
Therefore, [`Serial::available()`](https://www.arduino.cc/reference/en/language/functions/communication/serial/available/) returns `2` and the program calls `deserializeJson()` again.
`deserializeJson()` reads `\r\n`, which are just white spaces for him, so it continues reading until a timeout occurs (1s by default), and it finally returns `EmptyInput`.

You can fix this problem by changing the configuration of the Serial Monitor to "No line ending".
If you cannot remove the CR+LF at the end of the message, you must add a flush loop after `deserializeJson(doc, Serial)`, like so:

```c++
while (isspace(Serial.peek())
  Serial.read();
```

Did this solve your issue?
