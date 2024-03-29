---
options:
  success:
    label: "Yes"
    summary: Upgrading solve the issue
    page: /done.md
  upgraded:
    label: "No"
    summary: Upgrading doesn't solve the issue
    page: /deadend.md
---

So, I guess that you're not using `deserializeJson()` but `deserializeMsgPack()`, right?

Indeed, before [ArduinoJson 6.18](/news/2021/05/04/version-6-18-0/), `deserializeMsgPack()` returned `NotSupported` as soon as the input contains an unsupported MsgPack value type:

* a binary value
* an extension value
* an object key that is not a string

If that's your case, then you must upgrade the library. Instead of returning an error, newer versions simply ignore the unsupported values and replace them with nulls.

Did this solve your issue?
