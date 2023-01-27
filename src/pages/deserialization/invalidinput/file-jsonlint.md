---
summary: 
choices:
  - id: valid
    label: "Yes"
    summary: "`jsonlint` says the document is valid"
    next: file-bom
  - id: invalid
    label: "No"
    summary: "`jsonlint` says the document is invalid"
    next: jsonlint-bad
---

We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:

```c++
Serial.print(file.readString());
```

Then, copy the content and paste it in a JSON linter, like [jsonlint.com](https://jsonlint.com/).

Is the JSON document valid?