---
options:
  - id: valid
    label: "Yes"
    summary: "`jsonlint` says the document is valid"
    page: serial-buffer.md
  - id: invalid
    label: "No"
    summary: "`jsonlint` says the document is invalid"
    page: jsonlint-bad.md
---

We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:

```c++
Serial.print(Serial1.readString());
```

Note that [`Serial1.readString()`](https://www.arduino.cc/reference/en/language/functions/communication/serial/readstring/) will wait for a timeout before returning, so the statement may appear frozen. Be patient.

Then, copy the response and paste it in a JSON linter, like [jsonlint.com](https://jsonlint.com/).

Is the JSON document valid?