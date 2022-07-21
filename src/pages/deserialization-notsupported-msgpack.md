---
choices:
  - id: success
    label: "Yes"
    summary: Upgrading solve the issue
    next: done
  - id: upgraded
    label: "No"
    summary: Upgrading doesn't solve the issue
    next: deadend
---

So, I guess that you're not using [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}) but [`deserializeMsgPack()`]({% link v6/api/msgpack/deserializemsgpack.md %}), right?

Indeed, before [ArduinoJson 6.18]({% link _posts/2021-05-04-version-6-18-0.md %}), [`deserializeMsgPack()`]({% link v6/api/msgpack/deserializemsgpack.md %}) returned [`NotSupported`]({% link v6/api/misc/deserializationerror.md %}#notsupported) as soon as the input contains an unsupported MsgPack value type:

* a binary value
* an extension value
* an object key that is not a string

If that's your case, then you must upgrade the library. Instead of returning an error, newer versions simply ignore the unsupported values and replace them with nulls.

Did this solve your issue?