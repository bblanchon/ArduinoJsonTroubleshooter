---
choices:
  - id: http
    label: An HTTP response
    summary: Input comes from HTTP
    next: http
  - id: serial
    label: A serial port
    summary: Input comes from a serial port
    next: serial
  - id: file
    label: A file
    summary: Input comes from a file
    next: file-jsonlint
  - id: stream
    label: A stream
    summary: Input comes from a stream
    next: stream-jsonlint
  - id: string
    label: A string (like `String` or `const char*`)
    summary: Input comes from a string
    next: string-jsonlint
  - id: char-ptr
    label: A char array or pointer (like `char[]` or `char*`)
    summary: Input comes from a char array
    next: array
---

Where does the input come from?