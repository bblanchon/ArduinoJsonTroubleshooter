---
choices:
  - id: failure
    label: "Yes"
    summary: Reducing stack usage doesn't prevent the crash
    next: deadend
  - id: success
    label: "No"
    summary: Reducing stack usage prevents the crash
    next: done
---

I still think this could be a stack-overflow.

Please check in your code if there aren't some large variable in the stack. Look for things like:

* `char buffer[1024]`
* `int matrix[64][64][64]`
* `alloca(1024)`

If you read the JSON from a stream and place it in a buffer, you should instead pass the stream directly to [`deserializeJson()`]({% link v6/api/json/deserializejson.md %}). This techniques uses less RAM because ArduioJson will only copy the required parts in the [`DynamicJsonDocument`]({% link v6/api/dynamicjsondocument/index.md %}) and ignore all the spaces and ponctuation. Of course, you would need a bigger capacity: use the [ArduinoJson Assistant]({% link v6/assistant/index.html %}) to compute the right value.

If there are other large buffers, you can move them to the heap by using one of the following:

* {% include links/arduino/string/class %}
* {% include links/std/vector %}
* {% include links/std/string %}
* {% include links/std/unique_ptr %}

In the last resort, you can use {% include links/c/malloc %} and {% include links/c/free %}.

Does your program still crash?