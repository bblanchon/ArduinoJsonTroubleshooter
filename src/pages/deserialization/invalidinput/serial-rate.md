---
options:
  success:
    label: "Yes"
    summary: Reducing baud rate fixes the issue
    page: /done.md
  better:
    label: Somehow
    summary: Reducing baud rate improves the situation
    page: serial-cable.md
  not-better:
    label: "No"
    summary: Reducing baud rate doesn't fix the issue
    page: serial-jsonlint.md
---

Any kind of communication is subject to errors: sometimes you send a `1` and receive a `0`.
The problem with the serial port is that there is no built-in way to fix these errors.
However, we can take some measures to reduce the error ratio to something acceptable.

The faster the communication, the higher the error ratio, so the first thing to try is to reduce the communication speed.
Please try to reduce the baud rate.

If your program receives from one port and logs to another one, **make sure the latter runs at a much higher speed**. Logging must be at least ten times faster, or it will slow down the receiving port, which may drop incoming bytes.
{:.short-warning}

Did this solve your issue?