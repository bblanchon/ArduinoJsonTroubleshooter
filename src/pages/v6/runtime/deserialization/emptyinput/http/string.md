---
options:
  success:
    label: "Yes"
    summary: Passing a `Stream` to `deserializeJson()` fixes the issue
    page: /done.md
  stream:
    label: "No"
    summary: Passing a `Stream` to `deserializeJson()` doesn't fix the issue
    page: curl.md
---

I suspect the `String` allocation fails because the heap is exhausted or [fragmented](https://cpp4arduino.com/2018/11/06/what-is-heap-fragmentation.html).

Pass the input stream directly to `deserializeJson()` to avoid the allocation of a `String`.

For example, if you use `HTTPClient`:

```diff
- deserializeJson(doc, http.getString());
+ deserializeJson(doc, http.getStream());
```

Or, if you use `EthernetClient`, `WiFiClient`, or `WiFiClientSecure`:

```diff
- deserializeJson(doc, client.readString());
+ deserializeJson(doc, client);
```

Did this solve your issue?
