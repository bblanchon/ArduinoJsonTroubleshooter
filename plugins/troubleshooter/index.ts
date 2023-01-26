import { dataToEsm } from '@rollup/pluginutils'
import { Plugin, Logger, ViteDevServer } from 'vite'

import { PageMap } from "./pages"
import { getErrors } from "./validation"
import { PageLoader, LoaderConfig } from './loader'

type UserOptions = LoaderConfig


export default function TroubleshooterPlugin(userOptions: UserOptions = {}): Plugin {
  const virtualModuleId = 'virtual:troubleshooter'

  const loader = new PageLoader(userOptions)

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

  function loadPage(filename: string) {
    if (!loader.checkFilename(filename)) return
    const key = loader.getFileKey(filename)
    pages[key] = loader.loadFile(filename)
    filenames[key] = filename
  }

  function removePage(filename: string) {
    if (!loader.checkFilename(filename)) return
    const key = loader.getFileKey(filename)
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
      loader.listFiles().forEach(f => loadPage(f))
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