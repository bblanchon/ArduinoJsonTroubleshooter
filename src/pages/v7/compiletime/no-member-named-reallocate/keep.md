---
options:
  success:
    label: "Yes"
    summary: Adding the `reallocate()` method fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Adding the `reallocate()` method doesn't fix the issue
    page: /deadend.md
---

You must add the `reallocate()` method like so:

```diff
  struct SpiRamAllocator {
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
```

Did this solve your issue?
