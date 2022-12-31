import { resolve } from "node:path"

import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import mdiAttrs from "markdown-it-attrs"
import mdiHljs from "markdown-it-highlightjs"
import mdiReplaceLink from "markdown-it-replace-link"
import hljs from "highlight.js/lib/core"

import TroubleshooterPlugin from "./plugins/troubleshooter"

hljs.registerLanguage("cpp", require("highlight.js/lib/languages/cpp"))
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"))

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.js"),
      formats: ["iife"],
      name: "ArduinoJsonTroubleshooter",
      fileName: (format) => "troubleshooter.js"
    }
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    TroubleshooterPlugin({
      markdownItOptions: {
        highlight(str, lang) {
          if (lang && hljs.getLanguage(lang))
            return hljs.highlight(str, { language: lang }).value
          return "" // use external default escaping
        }
      },
      markdownItUses: [
        [mdiAttrs, { leftDelimiter: "{:", rightDelimiter: "}" }],
        [mdiHljs, { hljs }],
        [mdiReplaceLink, {
          replaceLink(link) {
            return new URL(link, "https://arduinojson.org").href
          }
        }],
      ]
    }),
  ]
}))
