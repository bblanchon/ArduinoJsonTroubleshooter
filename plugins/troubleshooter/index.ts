import { dataToEsm } from "@rollup/pluginutils"
import type { Plugin, Logger, ViteDevServer } from "vite"

import type { Page } from "./pages"
import { getErrors } from "./validation"
import { PageLoader, type LoaderConfig, type PageFile } from "./loader"

type UserOptions = LoaderConfig

export default function TroubleshooterPlugin(
  userOptions: UserOptions = {}
): Plugin {
  const virtualModuleId = "virtual:troubleshooter"

  const loader = new PageLoader(userOptions)

  const files: PageFile[] = []

  let logger: Logger
  let isProduction = false

  function checkIntegrity() {
    const errors = getErrors(files)

    for (const error of errors)
      logger.error(`${error.fullPath}: ${error.message}`)

    if (isProduction && errors.length)
      throw new Error(JSON.stringify(errors, null, 2))
  }

  function loadPage(filename: string) {
    if (!loader.checkFilename(filename)) return
    const file = loader.loadFile(filename)
    filename = loader.normalizeFilename(filename)
    const idx = files.findIndex((f) => f.filename == file.filename)
    if (idx >= 0) files[idx] = file
    else files.push(file)
  }

  function removePage(filename: string) {
    if (!loader.checkFilename(filename)) return
    filename = loader.normalizeFilename(filename)
    const idx = files.findIndex((f) => f.filename == filename)
    files.splice(idx, 1)
  }

  function reloadModule(server: ViteDevServer) {
    const { moduleGraph } = server
    const module = moduleGraph.getModuleById(virtualModuleId)
    if (module) server.reloadModule(module)
  }

  function makePage(file: PageFile): Page {
    const page: Page = {
      content: file.content
    }
    if (!isProduction) {
      page.filename = file.filename
      page.fullPath = file.fullPath
    }
    if (file.tags) page.tags = file.tags
    if (file.options)
      page.options = file.options.map((option) => ({
        id: option.id,
        page: files.findIndex((f) => f.filename == option.page),
        label: option.label,
        summary: option.summary
      }))
    return page
  }

  function generatePages(): Page[] {
    return files.map(makePage)
  }

  return {
    name: "troubleshooter", // required, will show up in warnings and errors
    configResolved(config) {
      logger = config.logger
      isProduction = config.isProduction
      loader.listFiles().forEach((f) => loadPage(f))
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
          code: dataToEsm(generatePages(), {
            compact: true,
            namedExports: false,
            preferConst: true
          })
        }
      }
    }
  }
}
