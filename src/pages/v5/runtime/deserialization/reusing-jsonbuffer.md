---
options:
  success:
    label: "Yes"
    summary: Creating a new `JsonBuffer` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: The program doesn't reuse the `JsonBuffer`
    page: reusing-input.md
---

This can happen if you reuse the same `JsonBuffer`.
The solution is simply to NOT reuse the `JsonBuffer`.
Here is an example:

```diff
- StaticJsonBuffer<200> jsonBuffer;

 for (int i=0; i<10; i++) {
     char json[256];
     readJsonFromSomewhere(json, sizeof(json));
 
+    StaticJsonBuffer<200> jsonBuffer;
     JsonObject& root = jsonBuffer.parse(json);
     if (root.success()) {
       Serial.println("parseObject() succeeded");
     } else {
       Serial.println("parseObject() failed!");
     }
 }
```

Note that, contrary to common belief, moving a `StaticJsonBuffer` inside of a loop has no negative impact on performance.

Did this solve your issue?
