---
options:
  success:
    label: "Yes"
    summary: Using a queue solves the issue.
    page: /done.md
  failure:
    label: "No"
    summary: Cannot use a queue.
    page: /deadend.md
---

This error occurs because you declared a `volatile` variable, but the member function you're trying to call is not qualified as `volatile`. In other words, the function is not meant to be called from a `volatile` instance.

[`JsonDocument`](/v7/api/jsondocument/) is not safe to use on concurrent threads, so its member cannot be qualified as `volatile`.

To work around this issue, you must remove the `volatile` qualifier and use a thread-safe synchronization mechanism. For example, you could push values into a [FreeRTOS queue](https://www.freertos.org/Embedded-RTOS-Queues.html) and pull them from the main thread.
