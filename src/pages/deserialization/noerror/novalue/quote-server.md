---
options:
  - id: success
    label: "Yes"
    summary: Fixing the server fixes the issue
    next: /done
  - id: server-ok
    label: "No"
    summary: Fixing the server doesn't fix the issue
    next: quote-keep
---

In the server implementation, please look at the view that returns the faulty JSON.
You will probably find that this function explicitly stringifies the response to JSON, which is incorrect because the underlying framework already does it for you.

Of course the details will depend on the framework you used to implement the server, but in any case, you'll have to remove a call to a function that stringifies to JSON. Here are some example:

* [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in JavaScript
* [`json_encode()`](https://www.php.net/manual/en/function.json-encode.php) in PHP
* [`json.dumps()`](https://docs.python.org/3/library/json.html) in Python
* [`JSON.generate()`](https://ruby-doc.org/stdlib-2.6.3/libdoc/json/rdoc/JSON.html) in Ruby
* [`JsonSerializer.Serialize()`](https://docs.microsoft.com/en-us/dotnet/api/system.text.json.jsonserializer.serialize) on .NET
* [`gson.toJson()`](https://www.javadoc.io/doc/com.google.code.gson/gson/latest/com.google.gson/com/google/gson/Gson.html) in Java
* [`json.Marshal()`](https://golang.org/pkg/encoding/json/) in Go

Did this solve your issue?