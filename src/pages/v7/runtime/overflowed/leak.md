---
options:
  success:
    label: "Yes"
    summary: Fixing the memory leak solves the issue.
    page: /done.md
  failure:
    label: "No"
    summary: The memory leak cannot be fixed.
    page: /deadend.md
---

There seems to be a memory leak in your program.  
A memory leak is when you allocate memory but never release it.  
It can come from your code or from a library you are using.  

I can't help you with that, but if I were you, I would start by commenting out parts of your code to see if the leak comes from there.

Was this diagnostic helpful?
