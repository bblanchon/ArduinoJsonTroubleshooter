import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Markdown, { link } from "vite-plugin-md"
import mdiAttrs from "markdown-it-attrs"
import mdiHljs from "markdown-it-highlightjs"
import hljs from "highlight.js/lib/core"

hljs.registerLanguage("cpp", require("highlight.js/lib/languages/cpp"))
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"))

function makeInternalLinkAbsolute(lnk) {
  lnk.href = new URL(lnk.href, "https://arduinojson.org").href
  return lnk
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
            mode == "development" ? makeInternalLinkAbsolute : undefined
        })
      ]
    })
  ]
}))
