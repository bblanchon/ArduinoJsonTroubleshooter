---
options:
  success:
    label: "Yes"
    summary: Upgrading the syntax and adding the `reallocate()` method fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Upgrading the syntax and adding the `reallocate()` method doesn't fix the issue
    page: /deadend.md
---

Here is how to upgrade your code:

```diff
- struct SpiRamAllocator {
+ struct SpiRamAllocator : ArduinoJson::Allocator {
   void* allocate(size_t size) {
     return heap_caps_malloc(size, MALLOC_CAP_SPIRAM);
   }
   
   void deallocate(void* pointer) {
     heap_caps_free(pointer);
   }

+  void* reallocate(void* ptr, size_t new_size) {
+    return heap_caps_realloc(ptr, new_size, MALLOC_CAP_SPIRAM);
+  }
  };

- using SpiRamJsonDocument = BasicJsonDocument<SpiRamAllocator>;
+ SpiRamAllocator allocator;

- SpiRamJsonDocument doc;
+ JsonDocument doc(&allocator);
```

For more information about the changes in ArduinoJson 7, please refer to the [upgrade guide](/v7/how-to/upgrade-from-v6/).

Did this solve your issue?
