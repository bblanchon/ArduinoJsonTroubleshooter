import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Markdown, { link } from "vite-plugin-md"

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
