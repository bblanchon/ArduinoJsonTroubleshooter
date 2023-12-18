---
options:
  failure:
    label: "Yes"
    summary: Reducing stack usage doesn't prevent the crash
    page: /deadend.md
  success:
    label: "No"
    summary: Reducing stack usage prevents the crash
    page: /done.md
---

I think this could be a stack-overflow.

Please check in your code if there aren't some large variable in the stack. Look for things like:

* `char buffer[1024]`
* `int matrix[64][64][64]`
* `alloca(1024)`

Move them to the heap by using one of the following:

* [`String`](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/)
* [`std::vector`](https://en.cppreference.com/w/cpp/container/vector)
* [`std::string](https://en.cppreference.com/w/cpp/string/basic_string)
* [`std::unique_ptr`](https://en.cppreference.com/w/cpp/memory/unique_ptr)

In the last resort, you can use [`malloc()`](https://en.cppreference.com/w/c/memory/malloc) and [`free()`](https://en.cppreference.com/w/c/memory/free).

Does your program still crash?
