---
options:
  success:
    label: "Yes"
    summary: Defining a specialization of `Converter` solves the issue
    page: /done.md
  failure:
    label: "No"
    summary: Defining a specialization of `Converter` doesn't solve the issue
    page: /deadend.md
---

This error typically happens when extracting a non-default-constructible type from a `JsonDocument`.

For example, suppose you have the following class:

```cpp
class Complex {
  double _real, _imag;
 public:
  // (no default constructor)
  explicit Complex(double r, double i) : _real(r), _imag(i) {}
  double real() const { return _real; }
  double imag() const { return _imag; }
};
```

If you try to extract a `Complex` from a `JsonDocument` like this:

```cpp
Complex sensor = doc["value"];
```

You will get the following error:

```text
ArduinoJson/Variant/ConverterImpl.hpp:39:7: error: no matching function for call to 'Complex::Complex()'
     T result; // Error here? See https://arduinojson.org/v7/non-default-constructible/
       ^~~~~~
MyProject.ino:14:12: note: candidate: Complex::Complex(double, double)
   explicit Complex(double r, double i) : _real(r), _imag(i) {}
            ^~~~~~~
```

To fix this error, you must provide a custom converter class for the `Complex` type, such as the following:

```c++
namespace ArduinoJson {
template <>
struct Converter<Complex> {
  static void toJson(const Complex& src, JsonVariant dst) {
    dst["real"] = src.real();
    dst["imag"] = src.imag();
  }

  static Complex fromJson(JsonVariantConst src) {
    return Complex(src["real"], src["imag"]);
  }

  static bool checkJson(JsonVariantConst src) {
    return src["real"].is<double>() && src["imag"].is<double>();
  }
};
}
```

The converter class is a specialization of `ArduinoJson::Converter<T>`, where `T` is the type you want to support.
This specialization must provide the three static methods shown above and be defined in the `ArduinoJson` namespace.

Did this solve your issue?
