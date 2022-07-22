---
choices:
  - id: success
    label: "Yes"
    summary: Following redirection fixes the issue
    next: done
  - id: no-redirection
    label: "No"
    summary: It's not a redirection
    next: deserialization-emptyinput-http-certificate
---

[`EmptyInput`](/v6/api/misc/deserializationerror/#emptyinput) in the context of an HTTP response usually means that the server returns a [redirection code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections) (like [301 Moved Permanently](https://en.wikipedia.org/wiki/HTTP_301) or [302 Found](https://en.wikipedia.org/wiki/HTTP_302)), but the client doesn't follow the redirection.

Please check the HTTP status code in the response. If it's 301 or 302, you must modify your program to handle the redirection.

If you use an HTTP library, make sure that you enabled the "follow redirection" feature.
For example, if you use `HTTPClient` on ESP8266 or ESP32, you must call the following function before sending the request:

```c++
http.setFollowRedirects(HTTPC_FORCE_FOLLOW_REDIRECTS);
```

Did this solve your issue?