---
options:
  success:
    label: "Yes"
    summary: Using a string fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Using a string doesn't fix the issue
    page: /deadend.md
---

Let's say you have the following JSON to parse:

```json
{
  "modules": [
    {
      "name": "hello",
      "id": 10
    },
    {
      "name": "world",
      "id": 20
    }
  ]
}
```

If you write the following program:

```c++
JsonObject& root =  jsonBuffer.parseOject(input);
JsonArray& modules = root["modules"];

const char* name = modules["hello"][0];
```

You'll get the following compilation error:

```text
error: invalid conversion from 'const char*' to 'size_t {aka unsigned int}' [-fpermissive]
```

This is because `modules` is an array of object, as such it's indexed by an integer, not by a string.

The solution is:

```c++
const char* name = modules[0]["hello"];
```

Did this solve your issue?
