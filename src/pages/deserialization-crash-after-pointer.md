---
choices:
  - id: success
    label: "Yes"
    summary: Replacing pointer with a `String` solves the issue
    next: done
  - id: failure
    label: "No"
    summary: Replacing pointer with a `String` doesn't solve the issue
    next: deadend
---

A programs can also crash after calling [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}) because it keeps a pointer to a string stored in the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}).

Indeed, when [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) returns a `const char*`, it doesn't return a copy of the string, but the address of the string in the memory pool. When the [`JsonDocument`]({% link v6/api/jsondocument/index.md %}) is destructed, the memory pool gets released and the pointer dangles. Later, when the program tries to use the string, it reads at an invalid memory location and crashes.

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

To fix this program, you must make a copy of the string and not simply store the pointer. For example, you can use a {% include links/arduino/string/class %}, like so:

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

Alternatively, you can use a `char[]` and {% include links/c/strcpy %}; I invite you to check the [JsonConfigFile.ino]({% link v6/example/config.md %}) for the details.

Did this solve your issue?