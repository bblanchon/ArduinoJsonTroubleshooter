---
options:
  zero-copy-disabled:
    label: "Yes"
    summary: Disabling the zero-copy mode fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Disabling the zero-copy mode doesn't fix the issue
    page: /deadend.md
---


It could also be dangling pointers to the input.

For example, the following function uses the zero-copy mode, but doesn't keep the input in memory:

```c++
JsonObject&  loadPlastic(DynamicJsonBuffer& jsonBuffer){
  File file = SPIFFS.open(HISTORY_FILE, "r");

  // DON'T DO THAT!!!
  size_t size = file.size();
  std::unique_ptr<char[]> buf (new char[size]);
  file.readBytes(buf.get(), size);
  JsonObject& root = jsonBuffer.parseObject(buf.get());

  file.close();
  return root;
}
```

Indeed, when called with a `char*` (or a `char[]`), `JsonBuffer::parseObject()` uses the zero-copy mode. In this mode, the `JsonObject` stores pointers to bytes in the input.

The zero-copy mode is very efficient, but it requires that the input variable has a longer lifetime than the `JsonObject`.

To fix this function, just change the type of the input to something that is read-only.
In this particular case, it's possible to pass the `file` directly:

```c++
JsonObject&  loadPlastic(DynamicJsonBuffer& jsonBuffer){
  File file = SPIFFS.open(HISTORY_FILE, "r");
  JsonObject& root = jsonBuffer.parseObject(file);
  file.close();
  return root;
}
```

Now, ArduinoJson will duplicates the relevant pieces of the input in the `JsonBuffer`.

Did this solve your issue?
