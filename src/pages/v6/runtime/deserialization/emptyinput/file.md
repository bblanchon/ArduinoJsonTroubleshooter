---
options:
  success:
    label: "Yes"
    summary: The file was the problem
    page: /done.md
  failure:
    label: "No"
    summary: The file is not the problem
    page: /deadend.md
---

`EmptyInput` in the context of a file usually means:

* the file is closed
* the file is opened in the wrong mode
* the file is empty
* the current position is at the end of the file

Please, make sure that the file is opened in "read" mode and try to print the content to make sure it's not empty.

You can find an example using the SD library in [JsonConfigFile.ino](/v6/example/config/) and one using SPIFFS in [Mastering ArduinoJson](/book/).

Did this sole your issue?
