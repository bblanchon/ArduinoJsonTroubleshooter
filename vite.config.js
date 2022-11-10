import { resolve } from "node:path"

import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Markdown from "vite-plugin-md"
import link from "@yankeeinlondon/link-builder"
import mdiAttrs from "markdown-it-attrs"
import mdiHljs from "markdown-it-highlightjs"
import hljs from "highlight.js/lib/core"

import frontmatterMarkdown from "./plugins/frontmatter-markdown"
import clientWarnings from "./plugins/client-warnings"

hljs.registerLanguage("cpp", require("highlight.js/lib/languages/cpp"))
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"))

function makeInternalLinkAbsolute(lnk) {
  lnk.href = new URL(lnk.href, "https://arduinojson.org").href
  return lnk
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
    Markdown({
      markdownItOptions: {
        highlight(str, lang) {
          if (lang && hljs.getLanguage(lang))
            return hljs.highlight(str, { language: lang }).value
          return "" // use external default escaping
        }
      },
      markdownItUses: [
        [mdiAttrs, { leftDelimiter: "{:", rightDelimiter: "}" }],
        [mdiHljs, { hljs }]
      ],
      builders: [
        link({
          useRouterLinks: false,
          internalLinkClass: undefined,
          internalTarget: "_blank",
          externalLinkClass: undefined,
          postProcessing:
            mode == "development" ? makeInternalLinkAbsolute : (x) => x
        }),
        frontmatterMarkdown()
      ]
    }),
    clientWarnings()
  ]
}))
