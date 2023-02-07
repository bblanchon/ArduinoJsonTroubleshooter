---
options:
  - id: success
    label: "Yes" 
    summary: Switching to `DynamicJsonDocument` prevents the crash
    next: /done
  - id: nomemory
    label: "Yes, but now `deserializeJson()` returns `NoMemory`" 
    summary: Switching to `DynamicJsonDocument` produces `NoMemory`
    next: static-nomemory
  - id: dynamicjsondocument-too
    label: "No"
    summary: Switching to `DynamicJsonDocument` doesn't prevent the crash
    next: dynamic
---

A big [`StaticJsonDocument`](/v6/api/staticjsondocument/) might indeed overflow the stack.
Even if there is a lot of free memory, you can run out of stack because many platforms limit the size at compile time.

For example, ESP8266 limits to 4096 and ESP32 limits to 8192.
These numbers might seem high, but huge part of the stack is already consumed by callers of your program. As a rule, I recommend never allocating a [`StaticJsonDocument`](/v6/api/staticjsondocument/) bigger than the half of the limit (so max 2048 on ESP8266 and 4096 on ESP32). If you need more space in your [`JsonDocument`](/v6/api/jsondocument/), you need to use a [`DynamicJsonDocument`](/v6/api/dynamicjsondocument/) instead.

Does switching to a [`DynamicJsonDocument`](/v6/api/dynamicjsondocument/) prevent the crash?
