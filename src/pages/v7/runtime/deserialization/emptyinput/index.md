---
options:
  http:
    label: An HTTP response
    summary: Input comes from an HTTP response
    page: /v6/runtime/deserialization/emptyinput/http/status.md
  file:
    label: A file
    summary: Input comes from a file
    page: file.md
  serial:
    label: A serial port
    summary: Input comes from a serial port
    page: serial-timeout.md
  other:
    label: Something else
    summary: Input comes neither from an HTTP response, nor a file, nor a serial port
    page: /v6/runtime/deserialization/emptyinput/other.md
---

`EmptyInput` means that the input was empty or contained only spaces or comments.

Where does your JSON input come from?
