---
options:
  success:
    label: "Yes"
    summary: The input was incorrect
    page: /done.md
  not-garbage:
    label: "No"
    summary: The input is correct
    page: /deadend.md
---

It seems that your program fed [`deserializeMsgPack()`](/v7/api/msgpack/deserializemsgpack/) with garbage input.

Indeed, any byte in the following ranges is a valid one-byte MessagePack document:

* `0x00`-`0x7f`: positive fixint
* `0xc0`: nil
* `0xc2`: false
* `0xc3`: true
* `0xe0`-`0xff`: negative fixint

As you can see, these values cover about 63% of all possible values for a random byte; that's why they are very likely to occur.

When the first byte in the input is one of these, [`deserializeMsgPack()`](/v7/api/msgpack/deserializemsgpack) saves the corresponding value in the `JsonDocument` and immediately returns [`Ok`](/v7/api/misc/deserializationerror/#ok), which is the correct behavior.

To fix this issue, you must repair the input.

Did this solve your issue?
