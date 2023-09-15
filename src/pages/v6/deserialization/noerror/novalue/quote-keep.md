---
options:
  success:
    label: "Yes"
    summary: Calling `deserializeJson()` twice fixes the issue
    page: /done.md
  call-twice:
    label: "No"
    summary: Calling `deserializeJson()` twice doesn't fix the issue
    page: /deadend.md
---

If you cannot fix the server, you can at least reverse the double serialization (stringification) to get back the original object.

To do this, you must call [`deserializeJson()`](/v6/api/json/deserializejson/) twice, like so:

```c++
StaticJsonDocument<512> doc1, doc2;
deserializeJson(doc1, input);
deserializeJson(doc2, doc1.as<const char*>());
String value = doc2["hello"];
```

In this snippet, `doc1` is only used during the second deserialization and can be safely discarded after that.
The cleanest way to do this is to wrap the double deserialization in a function, like so:

```c++
DeserilizationError deserializeJsonTwice(JsonDocument& doc, Stream& input) {
  StaticJsonDocument<512> tmp;
  DeserializationError err = deserializeJson(tmp, input);
  if (err) return err;
  return deserializeJson(doc, tmp.as<const char*>());
}
```

Of course, if you need to use the [filtering feature](/news/2020/03/22/version-6-15-0/), you must pass `DeserializationOption::Filter` to the second call to [`deserializeJson()`](/v6/api/json/deserializejson/).

Did this solve your issue?
