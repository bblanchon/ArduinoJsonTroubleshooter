---
options:
  success:
    label: "Yes"
    summary: The problem was due to a reused input
    page: /done.md
  failure:
    label: "No"
    summary: The program doesn't reuse the input
    page: heap-fragmentation.md
---

Your issue could be due to the "zero-copy" mode.

This mode is active when the input is writable (`char[]` or a `char*`).
In this mode, ArduinoJson modifies the input string in place: it inserts null terminators and unescapes special characters.
If you call [`parseObject()`](/v5/api/jsonbuffer/parseobject/) twice with the same input buffer, the first will work, but the second will fail because the input buffer doesn't contain a valid JSON document anymore.

The solution is simply to parse the input only once, or get a fresh input at each iteration.

```diff
- char json[256];
- readJsonFromSomewhere(json, sizeof(json));
  
  for (int i=0; i<10; i++) {
+     char json[256];
+     readJsonFromSomewhere(json, sizeof(json));

      StaticJsonBuffer<200> jsonBuffer;
  
      JsonObject& root = jsonBuffer.parse(json);
      if (root.success()) {
          Serial.println("parseObject() succeeded");
      } else {
          Serial.println("parseObject() failed!");
      }
  }
```

If you don't want ArduinoJson to modify the input buffer, i.e. if you want to disable the zero-copy mode, you need to pass the input as a read-only type, like `const char*`:

```diff
  char json[256];
  readJsonFromSomewhere(json, sizeof(json));
  
  for (int i=0; i<10; i++) {
      StaticJsonBuffer<400> jsonBuffer;
  
-     JsonObject& root = jsonBuffer.parse(json);
+     JsonObject& root = jsonBuffer.parse((const char*)json);
      if (root.success()) {
         Serial.println("parseObject() succeeded");
      } else {
         Serial.println("parseObject() failed!");
      }
  }
```

In this case, you also need to increase the capacity of the `JsonBuffer` because it will have to hold a partial copy of the input. As usual, use the [Assistant](/v5/assistant/) to compute the optimal capacity.

Did this solve your issue?
