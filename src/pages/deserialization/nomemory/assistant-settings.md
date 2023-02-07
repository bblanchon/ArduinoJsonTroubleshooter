---
options:
  - id: success
    label: "Yes"
    summary: Changing the Assistant settings solves the issue
    next: /done
  - id: failure
    label: "No"
    summary: Changing the Assistant settings doesn't solve the issue
    next: /deadend
---

I'm pretty confident the Assistant computes the right capacity; however, some settings can affect the result:

1. *Input type*, in step 1, should match the type of the argument passed to [`deserializeJson()`](/v6/api/json/deserializejson/)
2. *Deduplicate values when measuring the capacity*, in step 3, should be unchecked, most likely.
3. *Deduplicate keys when measuring the capacity*, in step 3, it should be unchecked if the keys are dynamic or if you used placeholders.

Please verify that these settings are correct.

Did this solve your issue?