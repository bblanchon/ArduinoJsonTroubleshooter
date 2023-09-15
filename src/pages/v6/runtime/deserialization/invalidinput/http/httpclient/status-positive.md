---
tags: needs_assistance
---

A positive number indicates an HTTP status returned by the server.

That's partly good news because it means you managed to reach the server.
Now you just have to figure out what went wrong.

First, you should look for the [definition of the status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Then, you should print the body of the response like so:

```c++
Serial.println(http.getString());
```

Hopefully, this will help you solve your issue.

There is nothing more I can do for you since this issue is not related to ArduinoJson.
