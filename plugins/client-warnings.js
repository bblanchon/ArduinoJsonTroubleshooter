import colors from "picocolors"

export default function () {
  return {
    configureServer(server) {
      server.ws.on("warning", (data, client) => {
        console.warn(colors.red(data.message))
      })
    }
  }
}
