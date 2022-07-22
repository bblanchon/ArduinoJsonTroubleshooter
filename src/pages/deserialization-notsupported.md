---
choices:
  - id: can-uprade
    label: "Yes"
    summary: "Library can be upgraded"
    next: deserialization-notsupported-upgrade
  - id: cannot-upgrade
    label: "No"
    summary: "Library cannot be upgraded"
    next: deserialization-notsupported-unicode
---

[`NotSupported`](/v6/api/misc/deserializationerror/#notsupported) means that the document was valid but contained features not supported by the library.

This error code was removed in [ArduinoJson 6.18](/news/2021/05/04/version-6-18-0/), so you should not see it anymore.

Can you upgrade the library?