---
options:
  success:
    label: "Yes"
    summary: The problem was a confusion between array and objects
    page: /done.md
  failure:
    label: "No"
    summary: The problem was not a confusion between array and objects
    page: /deadend.md
---

99.999% of the time, this is caused by a confusion between arrays and objects.

This often happens when the JSON document contains `[{` or `:[`.

##### Example 1: an array of object

```json
[{"hello":"world"}]
```

```diff
  JsonObject& root = jsonBuffer.parseObject(json);
- const char* world = root["hello"];
+ const char* world = root[0]["hello"];
```

##### Example 2: an array in an object

```json
{"hello":["world"]}
```

```diff
  JsonObject& root = jsonBuffer.parseObject(json);
- const char* world = root["hello"];
+ const char* world = root["hello"][0];
```

##### Example 3: an object in an array in an object

```json
{"hello":[{"new":"world"}]}
```

```diff
  JsonObject& root = jsonBuffer.parseObject(json);
- const char* world = root["hello"]["new"];
+ const char* world = root["hello"][0]["new"];
```

Did this solve your issue?
