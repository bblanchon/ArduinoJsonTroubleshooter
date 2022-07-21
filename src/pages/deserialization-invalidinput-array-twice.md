---
choices:
  - id: success
    label: "Yes, and it fixes the issue"
    summary: Removing the second call fixes the issue
    next: done
  - id: second-removed
    label: "Yes, but it doesn't fix the issue"
    summary: Removing the second call doesn't fix the issue
    next: deserialization-invalidinput-string-jsonlint
  - id: cannot-remove
    label: "No"
    summary: The second call cannot be removed
    next: deserialization-invalidinput-array-twice-cast
---

When you pass a writeable buffer as the input of [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}), ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), it stores pointers to the input buffer.

While doing this, the parser modifies the input buffer to unescape special characters and add string terminator.
When [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}) returns the input buffer doesn't contain a valid JSON document anymore.
For this reason, you cannot call [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}) twice with the same input buffer (if the input is writable).

I don't see any reason for calling [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}) twice with the same input, so I recommend that your remove the second call.

Can you avoid duplicate calls to [`deserializeJson()`]({% link v6/api/json/deserializejson.md %})?