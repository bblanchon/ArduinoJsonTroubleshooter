You must refactor your program so that it doesn't keep the `JsonObject` alive longer than the `JsonDocument`.

For example, if you return a `JsonObject` from a function, replace the `JsonObject` with a `JsonDocument`:

```diff
- JsonObject getWiFiConfig() {
+ JsonDocument getWiFiConfig() {
    File file = SD.open("config.json");
    JsonDocument doc;
    deserializeJson(doc, file);
    file.close();
    return doc["wifi"];
  }
```
