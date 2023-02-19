---
summary: 
options:
  - id: valid
    label: "Yes"
    summary: "`jsonlint` says the document is valid"
    page: string-bom.md
  - id: invalid
    label: "No"
    summary: "`jsonlint` says the document is invalid"
    page: jsonlint-bad.md
---

We need to make sure that the JSON document is valid.
To do that, please print the content of the string to the serial port, like so:

```c++
Serial.print(input);
```

Then, copy the response and paste it in a JSON linter, like [jsonlint.com](https://jsonlint.com/).

Is the JSON document valid?