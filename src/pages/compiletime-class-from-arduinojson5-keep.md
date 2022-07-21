---
choices:
  - id: success
    label: "Yes"
    summary: Downloading ArduinoJson 5 fixes the issue
    next: done
  - id: failure
    label: "No"
    summary: Downloading ArduinoJson 5 doesn't fix the issue
    next: deadend
---

{% capture version %}{% include v5/version %}{% endcapture %}
I recommend that you download {% include links/arduinojson_h version=version %} and save it among the project files, this way you're sure that the project is distributed with the right version of the library.

You can choose to keep the name `ArduinoJson-v{{version}}.h` and update the `#include` directive, or you can rename the file to `ArduinoJson.h`; either way is fine, as long as the header is in the same folder as the file that includes it.

Please see [installation instructions]({% link v5/doc/installation.md %}) for details

Did this solve your issue?