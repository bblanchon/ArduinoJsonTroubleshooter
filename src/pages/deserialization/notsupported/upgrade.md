---
choices:
  - id: success
    label: "Yes"
    summary: Upgrading solves the issue
    next: /done
  - id: updraded
    label: "No"
    summary: Upgrading doesn't solves the issue
    next: /deserialization/notsupported/upgrade-duplicates
---

Please upgrade ArduinoJson to the latest version.  
You may need to consult the [change log](https://github.com/bblanchon/ArduinoJson/blob/6.x/CHANGELOG.md) to make sure there aren't any breaking changes that could break your existing code.

Did this solve your issue?