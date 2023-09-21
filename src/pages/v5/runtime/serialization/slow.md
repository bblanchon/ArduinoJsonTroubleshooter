---
options:
  success:
    label: "Yes"
    page: /done.md
    summary: Adding a buffer fixes the issue
  failure:
    label: "No"
    page: /deadend.md
    summary: Adding a buffer doesn't fix the issue
---

First of all, ArduinoJson is **not slow** by itself. It's slow when used in conjunction with the `WifiClient` from the ESP8266 core.

The problem is that there is no buffer between ArduinoJson and the WifiClient.

To solve this, either:

1. Enable the [Nagle algorithm](https://en.wikipedia.org/wiki/Nagle%27s_algorithm) on `WifiClient` by calling `setNoDelay(false)`.
2. Serialize to a buffer and send the whole buffer in one shot.
3. Insert a [`BufferedPrint`](https://github.com/bblanchon/ArduinoStreamUtils) proxy between ArduinoJson and `WifiClient`.
