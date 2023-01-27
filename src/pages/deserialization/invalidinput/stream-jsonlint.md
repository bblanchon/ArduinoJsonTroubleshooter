---
summary: 
choices:
  - id: valid
    label: "Yes"
    summary: "`jsonlint` says the document is valid"
    next: stream-buffer
  - id: invalid
    label: "No"
    summary: "`jsonlint` says the document is invalid"
    next: jsonlint-bad
---

We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:

```c++
Serial.print(stream.readString());
```

Then, copy the response and paste it in a JSON linter, like [jsonlint.com](https://jsonlint.com/).

Is the JSON document valid?