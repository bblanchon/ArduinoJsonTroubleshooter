---
options:
  success:
    label: "Yes"
    summary: Removing `.c_str()` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Removing `.c_str()` doesn't fix the issue
    page: /deadend.md
---

You can insert [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) objects in a [`JsonDocument`](/v6/api/jsondocument/), but make sure you don't store the result of [`String::c_str()`](https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/).

The pointer returned by [`String::c_str()`](https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/) is valid only if you don't modify or destroy the string.
Indeed, this function returns the address of the internal buffer of the [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) instance.
This buffer is freed by [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/)'s destructor and may be reallocated each time the  [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) changes. It's crucial that you don't save the pointer returned of [`String::c_str()`](https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/); otherwise, the pointer may be dangling.

For example, the following lines create a dangling pointer:

```c++
// DON'T DO THAT!!!  💀
doc["address"] = address.toString().c_str();
// ...
serializeJson(doc, Serial);  // <- likely to produce garbage
```

Here, `address.toString()` returns a temporary [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) which is destructed after executing the first statement. When [`serializeJson()`](/v6/api/json/serializejson/) runs, the pointer stored in the [`JsonDocument`](/v6/api/jsondocument/) will be pointing to an invalid location. It may work by accident, but if the memory location is reused by another variable, it will print garbage to the serial port.

The solution is to duplicate string instead of saving a pointer.
Since ArduinoJson automatically duplicates [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) instances, all you need to do is  removing the call to [`String::c_str()`](https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/), like so:

```c++
doc["address"] = address.toString(); // <- duplicates
// ...
serializeJson(doc, Serial);
```

Now, ArduinoJson sees a [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) and knows that it needs to make a copy of the string in the [`JsonDocument`](/v6/api/jsondocument/).

Did this solve your issue?