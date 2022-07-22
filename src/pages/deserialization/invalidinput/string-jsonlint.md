---
summary: 
choices:
  - id: valid
    label: "Yes"
    summary: "`jsonlint` says the document is valid"
    next: deserialization/invalidinput/string-bom
  - id: invalid
    label: "No"
    summary: "`jsonlint` says the document is invalid"
    next: deserialization/invalidinput/jsonlint-bad
---

We need to make sure that the JSON document is valid.
To do that, please print the content of the string to the serial port, like so:

```c++
Serial.print(input);
```

Then, copy the response and paste it in a JSON linter, like [jsonlint.com](https://jsonlint.com/).

Is the JSON document valid?