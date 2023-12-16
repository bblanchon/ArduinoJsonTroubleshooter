---
options:
  success:
    label: "Yes"
    summary: Flushing the serial buffer fixes the issue
    page: /done.md
  flush:
    label: "No"
    summary: Flushing the serial buffer doesn't fix the issue
    page: /v6/runtime/deserialization/invalidinput/serial-voltage.md
---    

[`deserializeJson()`](/v7/api/json/deserializejson/) may return [`InvalidInput`](/v7/api/misc/deserializationerror/#invalidinput) because it starts reading the input mid-stream.

For example, it can happen if your program calls [`deserializeJson()`](/v7/api/json/deserializejson/) in a loop like so:

```c++
void loop() {
  if (Serial1.available()) {
    JsonDocument doc;
    DeserializationError err = deserializeJson(doc, Serial1);

    if (err) {
      Serial.println(err.c_str());
      return;
    }

    // ...
  }
}
```

The problem with this program is that, if [`deserializeJson()`](/v7/api/json/deserializejson/) returns an error (such as [`NoMemory`](/v7/api/misc/deserializationerror/#nomemory)), any subsequent call to [`deserializeJson()`](/v7/api/json/deserializejson/) will return [`InvalidInput`](/v7/api/misc/deserializationerror/#invalidinput). Indeed, [`deserializeJson()`](/v7/api/json/deserializejson/) stops reading as soon as it encounters an error, so the remainder of the document is still in the serial buffer.

The solution is to flush the serial buffer any time an error is detected:

```c++
void loop() {
  if (Serial1.available()) {
    JsonDocument doc;
    DeserializationError err = deserializeJson(doc, Serial1);

    if (err) {
      Serial.println(err.c_str());

      while (Serial1.available() > 0)
        Serial1.read();

      return;
    }

    // ...

  }
}
```

Did this solve your issue?
