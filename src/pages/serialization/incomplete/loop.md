---
options:
  - id: success
    label: "Yes"
    summary: Moving the `JsonDocument` inside the loop solves the issue
    next: /done
  - id: inside
    label: "No"
    summary: Moving the `JsonDocument` inside the loop doesn't solve the issue
    next: noloop
  - id: outside
    label: "I cannot move the declaration inside the loop"
    summary: The `JsonDocument` cannot be moved inside the loop
    next: loop-outside
---

Calling [`serializeJson()`](/v6/api/json/serializejson/) is safe, but you'll run into issues if you modify the same [`JsonDocument`](/v6/api/jsondocument/) in a loop.

The best workaround is to move the declaration of the [`JsonDocument`](/v6/api/jsondocument/) inside the loop.

For example:

```c++
// Before
StaticJsonDocument<128> doc;
for (int i=0; i<10; i++) {
  doc["userid"] = String("user") + i;
  serializeJson(doc, Serial);
}

// After
for (int i=0; i<10; i++) {
  StaticJsonDocument<128> doc;
  doc["userid"] = String("user") + i;
  serializeJson(doc, Serial);
}
```

Please read [I found a memory leak in the library!](/v6/issues/memory-leak/) for an explanation.

Did this solve your issue?