---
options:
  success:
    label: "Yes"
    summary: The wrong `parseXxx()` function was called
    page: /done.md
  failure:
    label: "No"
    summary: The program calls the right `parseXxx()` function
    page: nesting.md
---

Maybe you called [`parseObject()`](/v5/api/jsonbuffer/parseobject/) instead of [`parseArray()`](/v5/api/jsonbuffer/parsearray/)

This is a very common question as people are often confused when the JSON input contains mixed arrays and objects.

The answer is very simple: it's the type of the root that matters.
This means that you just need to look at the first character: it's either a `[`, for an array, or a `{`, for an object.

For example, if the input is:

```json
{"mickey":["mouse"],"donald":["duck"]}
```

then you must call [`parseObject()`](/v5/api/jsonbuffer/parseobject/) because the root is an object.

And, if the input is:

```json
[{"mickey":"mouse","donald":"duck"}]
```

then you must call [`parseArray()`](/v5/api/jsonbuffer/parsearray/) because the root is an array.

Finally, if you cannot know in advance the type of the root, simply use [`JsonBuffer::parse()`](/v5/api/jsonbuffer/parse/) which returns a [`JsonVariant`](/v5/api/jsonvariant/).

See also: [Parsing succeeds but I can't read the values!](/v5/faq/parsing-succeeds-but-i-cant-read-the-values/)

Did this solve your issue?
