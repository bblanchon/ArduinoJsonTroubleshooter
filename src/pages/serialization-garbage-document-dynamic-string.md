---
choices:
  - id: success
    label: "Yes"
    summary: Removing `.c_str()` fixes the issue
    next: done
  - id: failure
    label: "No"
    summary: Removing `.c_str()` doesn't fix the issue
    next: deadend
---

You can insert {% include links/arduino/string/class %} objects in a [`JsonDocument`]({% link v6/api/jsondocument/index.md %}), but make sure you don't store the result of {% include links/arduino/string/c_str %}.

The pointer returned by {% include links/arduino/string/c_str %} is valid only if you don't modify or destroy the string.
Indeed, this function returns the address of the internal buffer of the {% include links/arduino/string/class %} instance.
This buffer is freed by {% include links/arduino/string/class %}'s destructor and may be reallocated each time the  {% include links/arduino/string/class %} changes. It's crucial that you don't save the pointer returned of {% include links/arduino/string/c_str %}; otherwise, the pointer may be dangling.

For example, the following lines create a dangling pointer:

```c++
// DON'T DO THAT!!!  💀
doc["address"] = address.toString().c_str();
// ...
serializeJson(doc, Serial);  // <- likely to produce garbage
```

Here, `address.toString()` returns a temporary {% include links/arduino/string/class %} which is destructed after executing the first statement. When [`serializeJson()`]({% link v6/api/json/serializejson.md %}) runs, the pointer stored in the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) will be pointing to an invalid location. It may work by accident, but if the memory location is reused by another variable, it will print garbage to the serial port.

The solution is to duplicate string instead of saving a pointer.
Since ArduinoJson automatically duplicates {% include links/arduino/string/class %} instances, all you need to do is  removing the call to {% include links/arduino/string/c_str %}, like so:

```c++
doc["address"] = address.toString(); // <- duplicates
// ...
serializeJson(doc, Serial);
```

Now, ArduinoJson sees a {% include links/arduino/string/class %} and knows that it needs to make a copy of the string in the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}).

Did this solve your issue?