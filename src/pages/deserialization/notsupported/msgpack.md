---
options:
  - id: success
    label: "Yes"
    summary: Upgrading solve the issue
    page: /done.md
  - id: upgraded
    label: "No"
    summary: Upgrading doesn't solve the issue
    page: /deadend.md
---

So, I guess that you're not using [`deserializeJson()`](/v6/api/json/deserializejson/) but [`deserializeMsgPack()`](/v6/api/msgpack/deserializemsgpack/), right?

Indeed, before [ArduinoJson 6.18](/news/2021/05/04/version-6-18-0/), [`deserializeMsgPack()`](/v6/api/msgpack/deserializemsgpack/) returned [`NotSupported`](/v6/api/misc/deserializationerror/#notsupported) as soon as the input contains an unsupported MsgPack value type:

* a binary value
* an extension value
* an object key that is not a string

If that's your case, then you must upgrade the library. Instead of returning an error, newer versions simply ignore the unsupported values and replace them with nulls.

Did this solve your issue?