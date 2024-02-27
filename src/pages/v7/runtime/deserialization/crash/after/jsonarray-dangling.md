You must refactor your program so that it doesn't keep the `JsonArray` alive longer than the `JsonDocument`.

For example, if you return a `JsonArray` from a function, replace the `JsonArray` with a `JsonDocument`:

```diff
- JsonArray getPorts() {
+ JsonDocument getPorts() {
    File file = SD.open("config.json");
    JsonDocument doc;
    deserializeJson(doc, file);
    file.close();
    return doc["ports"];
  }
```
