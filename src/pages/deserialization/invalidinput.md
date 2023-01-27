---
choices:
  - id: http
    label: An HTTP response
    summary: Input comes from HTTP
    next: invalidinput/http
  - id: serial
    label: A serial port
    summary: Input comes from a serial port
    next: invalidinput/serial
  - id: file
    label: A file
    summary: Input comes from a file
    next: invalidinput/file-jsonlint
  - id: stream
    label: A stream
    summary: Input comes from a stream
    next: invalidinput/stream-jsonlint
  - id: string
    label: A string (like `String` or `const char*`)
    summary: Input comes from a string
    next: invalidinput/string-jsonlint
  - id: char-ptr
    label: A char array or pointer (like `char[]` or `char*`)
    summary: Input comes from a char array
    next: invalidinput/array
---

Where does the input come from?