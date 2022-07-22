---
---

This confirms that the problem comes from the certificate validation.

Disabling certificate validation might represent a risk, though, because your program cannot guarantee the remote server's identity. 
Sometimes this is acceptable, but in most cases, you should select an appropriate certificate validation strategy by calling {% include links/esp8266/wificlientsecure/setknownkey %}, {% include links/esp8266/wificlientsecure/setfingerprint %}, or {% include links/esp8266/wificlientsecure/settrustanchors %}.

Anyway, I'm glad I could help.  
I would be very grateful if, in return, you could [star ArduinoJson on GitHub](https://github.com/bblanchon/ArduinoJson/stargazers). ❤  

If you want to support the project (and learn a lot of stuff as well), you can purchase [Mastering ArduinoJson](/book/).  
Alternatively, you can [sponsor the project on GitHub](https://github.com/sponsors/bblanchon).

Should you have any idea on how I could improve myself, please [open an issue on GitHub](https://github.com/bblanchon/ArduinoJson/issues/new).

Bye!

--  
*ArduinoJson Troubleshooter*