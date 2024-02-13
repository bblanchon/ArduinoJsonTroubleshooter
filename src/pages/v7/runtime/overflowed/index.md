---
options:
  loose:
    label: There is a lot more memory than required
    summary: The Assistant says there is a lot more memory than required.
    page: cpu.md
  tight:
    label: There should be enough memory
    summary: The Assistant says there should be just enough memory.
    page: make-room.md
  too-small:
    label: There is not enough memory
    summary: The Assistant says there is not enough memory.
    page: too-small.md
---

Let's check with the [ArduinoJson Assistant](/v7/assistant/) to see if you have enough memory for your JSON document.

1. Open the [ArduinoJson Assistant](/v7/assistant/).
2. Set the configuration in step 1, then click "Next".
3. Enter your JSON document in step 2.

Look below the input field; the Assistant will show the amount of memory required for the JSON document below the input field.  
It will also tell you if this amount exceeds the available memory on your board.

What does the Assistant say?
