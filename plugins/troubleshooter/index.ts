import path from 'node:path'

import { dataToEsm, createFilter } from '@rollup/pluginutils'
import MarkdownIt from 'markdown-it'
import { Plugin, Logger, normalizePath, ViteDevServer } from 'vite'

import { listFiles, loadPageFile, PageMap } from "./pages"
import { getErrors } from "./validation"

interface UserOptions {
  folder?: string
  markdownItOptions?: MarkdownIt.Options
  markdownItUses?: [MarkdownIt.PluginWithOptions, any][]
}

export default function TroubleshooterPlugin(userOptions: UserOptions = {}): Plugin {
  const folder = path.resolve(userOptions.folder || "src/pages")
  const filenamePattern = normalizePath(path.join(folder, "**/*.md"))
  const isPage = createFilter(filenamePattern)
  const virtualModuleId = 'virtual:troubleshooter'

  const mdi = MarkdownIt(userOptions.markdownItOptions || {})
  userOptions.markdownItUses?.forEach(
    ([plugin, options]) => mdi.use(plugin, options)
  )
  const pages: PageMap = {}
  const filenames: { [key: string]: string } = {}

  let logger: Logger
  let isProduction = false

  function checkIntegrity() {
    const errors = getErrors(pages)

    errors.forEach(error => logger.error(`${filenames[error.page]}: ${error.message}`))
    if (isProduction && errors.length)
      throw new Error(JSON.stringify(errors, null, 2))
  }

  function getPageKey(filename: string) {
    return path.relative(folder, filename).slice(0, -3).replace(/\\/g, '/')
  }

  function loadPage(filename: string) {
    if (!isPage(filename)) return
    const key = getPageKey(filename)
    pages[key] = loadPageFile(filename, mdi)
    filenames[key] = filename
  }

  function removePage(filename: string) {
    if (!isPage(filename)) return
    const key = getPageKey(filename)
    delete pages[key]
    delete filenames[key]
  }

  function reloadModule(server: ViteDevServer) {
    const { moduleGraph } = server
    const module = moduleGraph.getModuleById(virtualModuleId)
    if (module)
      server.reloadModule(module)
  }

  return {
    name: 'troubleshooter', // required, will show up in warnings and errors
    configResolved(config) {
      logger = config.logger
      isProduction = config.isProduction
      listFiles(folder).forEach(f => loadPage(f))
    },
    configureServer(server) {
      server.watcher.on("change", (f) => {
        loadPage(f)
        checkIntegrity()
        reloadModule(server)
      })
      server.watcher.on("add", (f) => {
        loadPage(f)
        checkIntegrity()
        reloadModule(server)
      })
      server.watcher.on("unlink", (f) => {
        removePage(f)
        checkIntegrity()
        reloadModule(server)
      })
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return virtualModuleId
      }
    },
    load(id) {
      if (id === virtualModuleId) {
        checkIntegrity()
        return {
          code: dataToEsm(pages, { compact: true, namedExports: false, preferConst: true })
        }
      }
    },
  }
}