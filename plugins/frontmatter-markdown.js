import MarkdownIt from "markdown-it"
import { createBuilder, PipelineStage } from "@yankeeinlondon/builder-api"

const md = MarkdownIt()

export default createBuilder("frontmatterMarkdown", PipelineStage.metaExtracted)
  .options()
  .initializer(() => console.log("init"))
  .handler((payload) => {
    payload.frontmatter.choices?.forEach((choice) => {
      if (choice.label) choice.label = md.renderInline(choice.label)
      if (choice.summary) choice.summary = md.renderInline(choice.summary)
    })
    return payload
  })
  .meta({ description: "Converts markdown in frontmatter" })
