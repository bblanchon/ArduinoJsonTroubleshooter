---
choices:
  - id: http
    label: An HTTP response
    summary: Input comes from an HTTP response
    next: /deserialization/emptyinput/http-redirect
  - id: file
    label: A file
    summary: Input comes from a file
    next: /deserialization/emptyinput/file
  - id: serial
    label: A serial port
    summary: Input comes from a serial port
    next: /deserialization/emptyinput/serial-timeout
  - id: other
    label: Something else
    summary: Input comes neither from an HTTP response, nor a file, nor a serial port
    next: /deserialization/emptyinput/other
---

[`EmptyInput`](/v6/api/misc/deserializationerror/#emptyinput) means that the input was empty or contained only spaces or comments.

Where does your JSON input come from?