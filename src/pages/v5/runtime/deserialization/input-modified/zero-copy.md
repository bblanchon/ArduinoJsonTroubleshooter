---
options:
  success:
    label: "Yes"
    summary: Casting to `const char*` fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Casting to `const char*` doesn't fix the issue
    page: /deadend.md
---

When the input is a `char*` or a `char[]`, ArduinoJson enables the zero-copy mode.

In this mode, the JSON parser **modifies the input in-place**.
The following modifications are performed:

1. `'\0'` are inserted at the end of each string
2. Escaped special characters (like `\n`) are unescaped

Example:

```c++
char[] json = "{\"hello\":\"world\"}";
jsonBuffer.parseObject(json);
```

After executing the line above, the `input` variable probably contains something like: `"hello\0world\0"`.

This is the expected behavior, but if it's a problem for you, you can disable the zero-copy mode by casting the input to `const char*`:

```c++
jsonBuffer.parseObject(reinterpret_cast<const char*>(json));
```

Did this solve your issue?
