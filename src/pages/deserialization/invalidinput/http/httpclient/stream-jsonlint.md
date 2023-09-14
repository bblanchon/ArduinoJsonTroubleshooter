---
options:
  valid:
    label: "Yes"
    summary: "jsonlint says the document is valid"
    page: /deserialization/invalidinput/stream-bom.md
  invalid:
    label: "No"
    summary: "jsonlint says the document is invalid"
    page: /deserialization/invalidinput/jsonlint-bad.md
---

We need to make sure that the JSON document is valid.
To do that, please print the content of the response to the serial port like so:

```c++
Serial.print(http.getStream().readString());
```

Then, copy the response and paste it in a JSON linter, like [jsonlint.com](https://jsonlint.com/).

Is the JSON document valid?
