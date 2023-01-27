---
choices:
  - id: success
    label: "Yes"
    summary: Removing CRLF fixes the issue
    next: /done
  - id: failure
    label: "No"
    summary: Removing CRLF doesn't fix the issue
    next: /deadend
---

[`deserializeJson()`](/v6/api/json/deserializejson/) also returns [`EmptyInput`](/v6/api/misc/deserializationerror/#emptyinput) when the input contains only spaces. 

For example, this can happen when you call [`deserializeJson()`](/v6/api/json/deserializejson/) repeatedly and there are spaces (or line breaks) between the documents. Suppose you use the following program to parse JSON input from the serial port:

```c++
void loop() {
  // wait from an incomming message
  while (Serial.available() == 0)
    delay(100);
    
  StaticJsonDocument<1024> doc;
  DeserializationError err = deserializeJson(doc, Serial);
  
  ...
}
```

If you use the default settings of the Arduino Serial Monitor, `err` will contains [`Ok`](/v6/api/misc/deserializationerror/#ok) and then [`EmptyInput`](/v6/api/misc/deserializationerror/#emptyinput) each time you press "Send".

Indeed, by default the Arduino Serial Monitor appends [CRLF](https://fr.wikipedia.org/wiki/Carriage_Return_Line_Feed) at the end of the message, so when you enter `{"hello":"world"}` in the input box, what is really sent is `{"hello":"world"}\r\n`.
Since [`deserializeJson()`](/v6/api/json/deserializejson/) stops reading immediately at the end of the object, the `\r\n` remains in the serial buffer.
Therefore, [`Serial::available()`](https://www.arduino.cc/reference/en/language/functions/communication/serial/available/) returns `2` and the program calls [`deserializeJson()`](/v6/api/json/deserializejson/) again.
[`deserializeJson()`](/v6/api/json/deserializejson/) reads `\r\n`, which are just white spaces for him, so it continues reading until a timeout occurs (1s by default), and it finally returns [`EmptyInput`](/v6/api/misc/deserializationerror/#emptyinput).

You can fix this problem by changing the configuration of the Serial Monitor to "No line ending".
If you cannot remove the CR+LF at the end of the message, you must add a flush loop after `deserializeJson(doc, Serial)`, like so:

```c++
while (isspace(Serial.peek())
  Serial.read();
```

Did this solve your issue?