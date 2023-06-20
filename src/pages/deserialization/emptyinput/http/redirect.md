---
options:
  success:
    label: "Yes"
    summary: Following the redirection fixes the issue
    page: /done.md
  follow:
    label: "No"
    summary: Following the redirection doesn't fix the issue
    page: timeout.md
---

The server returned a [redirection code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections), but the client didn't follow the redirection.

If you use an HTTP library, make sure that you enabled the "follow redirection" feature.
For example, if you use `HTTPClient` on ESP8266 or ESP32, you must call the following function before sending the request:

```c++
http.setFollowRedirects(HTTPC_FORCE_FOLLOW_REDIRECTS);
```

If you don't use an HTTP library, you need to extract the `Location` header from the response and make a new request.

Did this solve your issue?