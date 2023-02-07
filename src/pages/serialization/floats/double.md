---
options:
  - id: success
    label: "Yes"
    summary: Rounding the value fixes the issue
    next: /done
  - id: double
    label: "No"
    summary: Rounding the value doesn't fix the issue
    next: double-rounded
---

Please add the following function somewhere in your program:

```c++
// rounds a number to 2 decimal places
// example: round(3.14159) -> 3.14
double round2(double value) {
   return (int)(value * 100 + 0.5) / 100.0;
}
```

Now, call this function when inserting the value in the [`JsonDocument`](/v6/api/jsondocument/); for example:

```c++
doc["value"] = round2(value);
```

Did this solve your issue?