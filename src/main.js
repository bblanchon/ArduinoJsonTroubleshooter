import { createApp } from "vue"
import App from "./App.vue"

const app = createApp(App)

app.provide("debug", import.meta.env.DEV)

app.mount("#troubleshooter-app")
