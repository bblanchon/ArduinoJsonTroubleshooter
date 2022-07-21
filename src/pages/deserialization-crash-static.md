---
choices:
  - id: success
    label: "Yes" 
    summary: Switching to `DynamicJsonDocument` prevents the crash
    next: done
  - id: nomemory
    label: "Yes, but now `deserializeJson()` returns `NoMemory`" 
    summary: Switching to `DynamicJsonDocument` produces `NoMemory`
    next: deserialization-crash-static-nomemory
  - id: dynamicjsondocument-too
    label: "No"
    summary: Switching to `DynamicJsonDocument` doesn't prevent the crash
    next: deserialization-crash-dynamic
---

A big [`StaticJsonDocument`]({% link v6/api/staticjsondocument/index.md %}) might indeed overflow the stack.
Even if there is a lot of free memory, you can run out of stack because many platforms limit the size at compile time.

For example, ESP8266 limits to 4096 and ESP32 limits to 8192.
These numbers might seem high, but huge part of the stack is already consumed by callers of your program. As a rule, I recommend never allocating a [`StaticJsonDocument`]({% link v6/api/staticjsondocument/index.md %}) bigger than the half of the limit (so max 2048 on ESP8266 and 4096 on ESP32). If you need more space in your [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), you need to use a [`DynamicJsonDocument`]({% link v6/api/dynamicjsondocument/index.md %}) instead.

Does switching to a [`DynamicJsonDocument`]({% link v6/api/dynamicjsondocument/index.md %}) prevent the crash?
