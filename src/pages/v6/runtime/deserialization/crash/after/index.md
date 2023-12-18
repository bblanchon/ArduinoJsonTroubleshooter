---
options:
  success:
    label: "Yes"
    summary: Replacing pointer with a `String` solves the issue
    page: /done.md
  no-dangling-pointer:
    label: "No"
    summary: Replacing pointer with a `String` doesn't solve the issue
    page: stdlib.md
---

Sometimes, a program crashes after calling `deserializeJson()` because it keeps a pointer to a string stored in the `JsonDocument`.

Indeed, when `JsonDocument` returns a `const char*`, it doesn't return a copy of the string, but the address of the string in the memory pool. When the `JsonDocument` is destructed, the memory pool gets released and the pointer dangles. Later, when the program tries to use the string, it reads at an invalid memory location and crashes.

For example, it happens with the following program:

```c++
const char* username;

void loadConfig() {
  File file = SD.open(filename);
  StaticJsonDocument<512> doc;
  deserializeJson(doc, file);
  username = doc["username"];  // ⚠️ stores the pointer
  file.close();
}

void setup() {
  Serial.begin(9600);
  loadConfig();
  Serial.println(username);  // 💥 BOOM!
}
```

This is a simplified example; in a real project, things would be more tangled. For example, the variable could be in a `struct` or a class `class`, and the program could use the string much later.

To fix this program, you must make a copy of the string and not simply store the pointer. For example, you can use a [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/), like so:

```c++
String username;

void loadConfig() {
  File file = SD.open(filename);
  StaticJsonDocument<512> doc;
  deserializeJson(doc, file);
  username = doc["username"];  // ✅ stores a copy
  file.close();
}

void setup() {
  Serial.begin(9600);
  loadConfig();
  Serial.println(username);  // ✅ reads the copy
}
```

Alternatively, you can use a `char[]` and [`strcpy()`](https://en.cppreference.com/w/c/string/byte/strcpy); I invite you to check the [JsonConfigFile.ino](/v6/example/config/) for the details.

Did this solve your issue?
