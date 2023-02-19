---
options:
  - id: success
    label: "Yes"
    summary: Upgrading the cables solves the issue
    page: /done.md
  - id: improved
    label: Somehow
    summary: Upgrading the cables improves the situation
    page: serial-hamming.md
  - id: no-improvment
    label: "No"
    summary: Upgrading the cables doesn't solve the issue
    page: serial-jsonlint.md
--- 

Any electric wire acts as an antenna; the longer the wire, the stronger the effect. This antenna picks up every electromagnetic field in the environment, which induces a current in the wire. On long wires, this current is strong enough to introduce errors in the communication.

Reducing the length of the cable certainly improve the error ratio, but is rarely applicable.
We can, however, improve the quality of the cable.
For example, you can replace the wires with a coaxial cable: the shielding will prevent the inner wire from acting as an antenna.

Please upgrade or shorten your cable.

Did this solve your issue?