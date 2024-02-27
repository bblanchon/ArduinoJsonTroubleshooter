You must refactor your program so that it doesn't keep the `JsonVariant` alive longer than the `JsonDocument`.

For example, if you return a `JsonVariant` from a function, replace the `JsonVariant` with a `JsonDocument`:

```diff
- JsonVariant getWiFiConfig() {
+ JsonDocument getWiFiConfig() {
    File file = SD.open("config.json");
    JsonDocument doc;
    deserializeJson(doc, file);
    file.close();
    return doc["wifi"];
  }
```
