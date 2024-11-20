import { resolve } from "node:path"
import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import mdiAttrs from "markdown-it-attrs"
import mdiHljs from "markdown-it-highlightjs"
import mdiReplaceLink from "markdown-it-replace-link"
import hljs from "highlight.js/lib/core"
import cpp from "highlight.js/lib/languages/cpp"
import json from "highlight.js/lib/languages/json"

import TroubleshooterPlugin from "./plugins/troubleshooter"

hljs.registerLanguage("cpp", cpp)
hljs.registerLanguage("json", json)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["iife"],
      name: "ArduinoJsonTroubleshooter",
      fileName: (format) => "troubleshooter.js",
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    TroubleshooterPlugin({
      markdownItOptions: {
        highlight(str, lang) {
          if (lang && hljs.getLanguage(lang))
            return hljs.highlight(str, { language: lang }).value
          return "" // use external default escaping
        },
      },
      markdownItUses: [
        [mdiAttrs, { leftDelimiter: "{:", rightDelimiter: "}" }],
        [mdiHljs, { hljs }],
        [
          mdiReplaceLink,
          {
            replaceLink(link: string) {
              if (mode == "development")
                return new URL(link, "https://arduinojson.org").href
              else return link
            },
          },
        ],
      ],
    }),
  ],
}))
