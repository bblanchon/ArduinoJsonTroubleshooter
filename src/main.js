import { createApp } from "vue"
import App from "./App.vue"

createApp(App)
  .provide("debug", import.meta.env.DEV)
  .mount("#troubleshooter-app")
