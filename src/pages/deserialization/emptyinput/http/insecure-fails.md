---
tags: needs_assistance
---

As I said, a negative status number indicates an error on the client side.

Here are the possible values that I'm aware of:

| Symbol                            | Value |
|:----------------------------------|:------|
| `HTTPC_ERROR_CONNECTION_FAILED`   | `-1`  |
| `HTTPC_ERROR_SEND_HEADER_FAILED`  | `-2`  |
| `HTTPC_ERROR_SEND_PAYLOAD_FAILED` | `-3`  |
| `HTTPC_ERROR_NOT_CONNECTED`       | `-4`  |
| `HTTPC_ERROR_CONNECTION_LOST`     | `-5`  |
| `HTTPC_ERROR_NO_STREAM`           | `-6`  |
| `HTTPC_ERROR_NO_HTTP_SERVER`      | `-7`  |
| `HTTPC_ERROR_TOO_LESS_RAM`        | `-8`  |
| `HTTPC_ERROR_ENCODING`            | `-9`  |
| `HTTPC_ERROR_STREAM_WRITE`        | `-10` |
| `HTTPC_ERROR_READ_TIMEOUT`        | `-11` |

{: .table }

Hopefully, this will help you solve your issue.

There is nothing more I can do for you since this issue is not related to ArduinoJson.