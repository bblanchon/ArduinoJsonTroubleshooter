---
options:
  success:
    label: "Yes"
    summary: Casting the pointer solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Casting the pointer doesn't solve the issue
    page: /deadend.md
---

When you use `PROGMEM` with ArduinoJson (and any other Arduino code, really), you must make sure that the addresses in Flash memory aren't interpreted as addresses in RAM.

Indeed, [Harvard architectures](https://en.wikipedia.org/wiki/Harvard_architecture) (like [AVR](https://en.wikipedia.org/wiki/AVR_microcontrollers) and [ESP8266](https://en.wikipedia.org/wiki/ESP8266)) use different addresses spaces for RAM and Flash. This means that the same address can refer to either Flash or RAM, so the CPU has no way to tell that some pointers target RAM and some others target Flash. That's why the program needs to treat the two areas separately.

Getting back to your program, you must make sure that ArduinoJson can clearly identify Flash strings as such. The `PROGMEM` attribute itself isn't sufficient because it doesn't alter the C++ type of the string. That's why ArduinoJson needs you to pass a pointer of type `const __FlashStringHelper*` when you refer to a Flash string.

For example, the following program is incorrect and very likely to crash:

```c++
const char PROGMEM key[] = "the answer";

doc[key] = 42; // <- BOOOOOM!!!!
```

Because, it saw a string of type `const char*`, ArduinoJson assumed the pointer was refering to the RAM address space.
To fix this issue, you must cast the pointer to ``const __FlashStringHelper*`, like so:

```c++
const char PROGMEM key_data[] = "the answer";
const __FlashStringHelper* key = (const __FlashStringHelper*)key_data;

doc[key] = 42;
```

As you can see, this is quite ugly. Fortunately, Arduino provides the F(), which declares the Flash string and return the appropriate type:

```c++
doc[F("the answer")] = 42;
```

There is one drawback with the `F()`, though: it doesn't perform [string interning](https://cpp4arduino.com/2018/10/23/what-is-string-interning.html).
This means that every call to the macro creates a new string in the program memory, even if the same string was already present.
So, be careful with this macro; otherwise, you'll end up with multiple copies of the same string, and the program will be bigger than it should.
If you need to use the Flash string in several places, you better define a variable, like so:

```c++
auto key = F("the answer");

doc[key] = 42;
```

Did this solve your issue?
