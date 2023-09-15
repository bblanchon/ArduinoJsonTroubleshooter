---
options:
  redirect:
    label: "`300` to `399`"
    summary: The status code indicates a redirection
    page: redirect.md
  negative:
    label: A negative number
    summary: The status code is negative
    page: status-negative.md
  status-ok:
    label: None of the above
    summary: The status code is not in the list
    page: timeout.md
---

Please check the HTTP status

For example, if you use `HTTPClient`, what value is returned by `http.GET()`?
