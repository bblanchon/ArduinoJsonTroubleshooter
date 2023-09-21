---
options:
  no-cstr:
    label: "Yes"
    summary: Removing `c_str()` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Removing `c_str()` doesn't fix the issue
    page: zero-copy.md
---

Sometime, it's not the `JsonBuffer` that is destructed, but a string that was added to the [`JsonObject`](/v5/api/jsonobject/).

For example, the following program fills a [`JsonObject`](/v5/api/jsonobject/) with a temporary `String`:

```c++
// DON'T DO THAT!!!
JsonObject& obj = jsonBuffer.createObject();
obj["address"] = address.toString().c_str();
obj.printTo(Serial); // <- likely to produce garbage
```

The problem is that the call to `address.toString()` produce a temporary `String` that is destructed as soon as the line is executed.

By calling [`String::c_str()`](https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/), the program gets a pointer to the temporary string and gives it to ArduinoJson. Since ArduinoJson sees a `const char*` it doesn't duplicate the string and simply saves the pointer.

The problem can be avoided by removing the call to [`String::c_str()`](https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/):

```c++
JsonObject& obj = jsonBuffer.createObject();
obj["address"] = address.toString(); // <- duplicates
obj.printTo(Serial);
```

Now, ArduinoJson sees a [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) and knows that it needs to make a copy of the string in the `JsonBuffer`.

Did this solve your issue?
