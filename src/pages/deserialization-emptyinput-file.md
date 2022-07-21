---
choices:
  - id: success
    label: "Yes"
    summary: The file was the problem
    next: done
  - id: failure
    label: "No"
    summary: The file is not the problem
    next: deadend
---

[`EmptyInput`]({% link v6/api/misc/deserializationerror.md %}#emptyinput) in the context of a file usually means:

* the file is closed
* the file is opened in the wrong mode
* the file is empty

Please, make sure that the file is opened in "read" mode and try to print the content to make sure it's not empty.

You can find an example using the SD library in [JsonConfigFile.ino]({% link v6/example/config.md %}) and one using SPIFFS in [Mastering ArduinoJson]({% link book/index.md %}).

Did this sole your issue?