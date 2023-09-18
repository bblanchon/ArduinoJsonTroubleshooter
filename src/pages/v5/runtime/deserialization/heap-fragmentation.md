---
options:
  success:
    label: "Yes"
    summary: Allocating on the stack fixes the issue
    page: /done.md
  failure:
    label: "No"
    summary: Allocating on the stack doesn't fix the issue
    page: /deadend.md
---

In rare cases, the [fragmentation of the heap](https://cpp4arduino.com/2018/11/06/what-is-heap-fragmentation.html) can have the same effect as a memory leak.

Indeed, when the heap is highly fragmented, it's not possible to allocate any significant chunk of memory. Even worse, for devices that don't limit the size of the stack, it's possible that the heap and the stack overlap (see chapter 2: *The missing C++ course* of [Mastering ArduinoJson](/book/)).

This problem is likely to occur on devices with very limited RAM, like the Arduino UNO.
If you use such device, you should avoid using the heap entirely. That means: no more `String` and no more `DynamicJsonBuffer`, instead use only `char*` and `StaticJsonBuffer`.
  
```diff
- String json = "{\"hello\":\"world\"}";
+ char[] json = "{\"hello\":\"world\"}";
- DynamicJsonBuffer jsonBuffer;
+ StaticJsonBuffer<capacity> jsonBuffer;
  jsonBuffer.parseObject(json);
```

As usual, use the [Assistant](/v5/assistant/) to compute the optimal capacity.

Did this fix your issue?
