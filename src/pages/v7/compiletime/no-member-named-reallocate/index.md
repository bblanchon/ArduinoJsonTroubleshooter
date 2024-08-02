---
options:
  upgrade:
    label: Upgrade to ArduinoJson 7 syntax (recommended)
    summary: User wants to upgrade to ArduinoJson 7 syntax
    page: upgrade.md
  failure:
    label: Keep to ArduinoJson 6 syntax (quick fix)
    summary: User wants to keep to ArduinoJson 6 syntax
    page: keep.md
---

This error occurs when the following condition are met:

1. The program was designed for ArduinoJson 6.
2. The program uses a custom allocator.
3. The custom allocator doesn't define `reallocate()`.

Indeed, in ArduinoJson 6, the `reallocate()` method was optional for custom allocators.  
It's now mandatory in ArduinoJson 7, and that's why you get this error.

There are two ways to fix this issue. You can either:
