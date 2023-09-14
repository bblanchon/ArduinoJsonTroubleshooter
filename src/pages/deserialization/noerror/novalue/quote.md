---
options:
  server-fixable:
    label: "Yes"
    summary: User can modify the server
    page: quote-server.md
  server-unfixable:
    label: "No"
    summary: User cannot modify the server
    page: quote-keep.md
---

If you see a double-quote at the beginning of the JSON input, it means that the whole document is neither an object or an array; it's a string. This happens when the input was incorrectly generated, by serializing (stringifying) to JSON twice.

For example, the following document:

```json
"{\"hello\":\"world\"}"
```

...is not a JSON *object* but a *string*.
It's the result of the JSON serialization (stringification) of the following JSON document:

```json
{"hello":"world"}
```

...which was alread serialized (stringified) to JSON.

So, the bug isn't in the Arduino code, but on the other size, most likely a server.

Can you modify the code of the server?
