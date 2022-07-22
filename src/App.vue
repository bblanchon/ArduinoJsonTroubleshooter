<template>
  <div>
    <component :is="intro" />
    <template v-for="(step, index) in steps">
      <transition name="fade" mode="out-in">
        <div
          v-if="step.choices.length"
          :key="step.hash"
          class="troubleshooter-step mb-4"
        >
          <h2
            class="troubleshooter-step-number"
            :id="step.id"
            :title="debug && step.slug"
          >
            <div class="bg-secondary text-white rounded-circle">
              {{ index + 1 }}
              <span v-if="debug" class="sr-only">: {{ step.slug }}</span>
            </div>
          </h2>
          <component :is="step.component" class="troubleshooter-step-content" />
          <div class="troubleshooter-step-choices">
            <div
              v-for="(choice, index) in step.choices"
              :key="choice.label"
              class="form-check"
            >
              <input
                type="radio"
                :name="step.id"
                :id="choice.inputId"
                class="form-check-input"
                :checked="choice.selected"
                @click="choose(choice)"
                :disabled="choice.missing"
              />
              <label
                class="form-check-label"
                :for="choice.inputId"
                v-html="choice.label"
              ></label>
              <div
                v-if="debug"
                class="d-block mb-2 small text-muted"
                v-html="choice.summary"
              ></div>
            </div>
          </div>
        </div>
        <component
          v-else
          :is="step.component"
          class="troubleshooter-step-content"
          :id="step.id"
        />
      </transition>
    </template>
    <div v-if="needsAssistance">
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#assistance-modal"
      >
        Contact support
      </button>
      <button
        class="btn"
        :class="{
          'btn-outline-primary': !reportCopied,
          'btn-success': reportCopied
        }"
        :disabled="reportCopied"
        @click="copyReport"
      >
        {{ reportCopied ? "✓ Report copied" : "Copy troubleshooter's report" }}
      </button>
      <div class="modal fade" id="assistance-modal">
        <div class="modal-dialog modal-dialog-scrollable modal-lg">
          <form
            class="modal-content"
            ref="issueForm"
            @submit.prevent="createIssue"
          >
            <div class="modal-header bg-primary text-white">
              <h5 class="modal-title">Contact support</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="alert alert-info">
                This form simplifies the creation of an issue on ArduinoJson's
                GitHub project page. It ensures you provide all the required
                information and prefills the issue's text. After that, you just
                need to submit the issue.<br />
                <b>A GitHub account is required.</b>
              </div>
              <div class="form-group">
                <label for="title-input">Title</label>
                <input
                  type="text"
                  name="title"
                  class="form-control"
                  id="title-input"
                  aria-describedby="title-help"
                  required
                />
                <small id="title-help" class="form-text text-muted"
                  >Summarize your issue in one sentence.</small
                >
              </div>
              <div class="form-group">
                <label for="description-input">Description</label>
                <textarea
                  name="description"
                  rows="3"
                  class="form-control"
                  id="description-input"
                  aria-describedby="description-help"
                  required
                  placeholder="When I do ..., I expect ..., but instead I get ..."
                ></textarea>
                <small id="description-help" class="form-text text-muted"
                  >Describe your issue with a few sentences.</small
                >
              </div>
              <div class="form-group">
                <label for="mcu-input">Microcontroller</label>
                <input
                  type="text"
                  name="mcu"
                  class="form-control"
                  id="mcu-input"
                  aria-describedby="mcu-help"
                  placeholder="ESP8266"
                  required
                />
                <small id="mcu-help" class="form-text text-muted"
                  >Which processor or with board do you use?</small
                >
              </div>
              <div class="form-group">
                <label for="framework-input">Arduino Core / Framework</label>
                <input
                  type="text"
                  name="framework"
                  class="form-control"
                  id="framework-input"
                  aria-describedby="framework-help"
                  placeholder="ESP8266 core for Arduino v3.0.2"
                />
                <small id="framework-help" class="form-text text-muted"
                  >Please include version number.</small
                >
              </div>
              <div class="form-group">
                <label for="ide-input">IDE</label>
                <input
                  type="text"
                  name="ide"
                  class="form-control"
                  id="ide-input"
                  aria-describedby="ide-help"
                  placeholder="Arduino IDE 1.8.16"
                />
                <small id="ide-help" class="form-text text-muted"
                  >Please include version number.</small
                >
              </div>
              <div class="form-group">
                <label for="repro-input">Reproduction code</label>
                <textarea
                  name="repro"
                  rows="10"
                  class="form-control text-monospace"
                  style="font-size: 80%"
                  id="repro-input"
                  aria-describedby="repro-help"
                  placeholder="DynamicJsonDocuemnt doc(1024);\n..."
                ></textarea>
                <small id="repro-help" class="form-text text-muted"
                  >Write a few lines of code that demonstrate the issue.</small
                >
              </div>
              <div class="form-group">
                <label for="remarks-input">Remarks</label>
                <textarea
                  name="remarks"
                  rows="4"
                  class="form-control"
                  id="remarks-input"
                  aria-describedby="remarks-help"
                ></textarea>
                <small id="remarks-help" class="form-text text-muted"
                  >Anything else you need to tell us?</small
                >
              </div>
            </div>
            <div class="modal-footer">
              <div class="text-right">
                <button type="submit" class="btn btn-primary">Submit</button>
                <small class="form-text text-muted">
                  This button redirects you to GitHub.
                </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pages from "./pages"

const sleep = (m) => new Promise((r) => setTimeout(r, m))

function makeStep(pageKey, hash) {
  const page = pages[pageKey]
  if (!page) return null
  return {
    ...page,
    slug: pageKey,
    hash: hash || "#",
    id: (hash || "#start").substring(1),
    choices: page.choices?.map((choice) => ({
      ...choice,
      inputId: (hash ? hash.substring(1) + "/" : "") + choice.id,
      hash: (hash ? hash + "/" : "#") + choice.id,
      missing: !pages[choice.next]
    }))
  }
}

export default {
  setup() {
    return {
      intro: pages["intro"].component
    }
  },
  data() {
    return {
      reportCopied: false,
      hash: "",
      debug: import.meta.env.DEV
    }
  },
  mounted() {
    this.hash = location.hash
    window.addEventListener("hashchange", () => (this.hash = location.hash))
  },
  computed: {
    currentStep() {
      return this.steps[this.steps.length - 1]
    },
    currentStepIsMissing() {
      return !this.currentStep
    },
    needsAssistance() {
      return !this.currentStep || this.currentStep.needs_assistance
    },
    steps() {
      const steps = [makeStep("start")]
      if (this.hash) {
        let lastStep = steps[0]
        for (let choiceId of this.hash.substring(1).split("/")) {
          const choice = lastStep.choices.filter(
            (choice) => choice.id === choiceId
          )[0]
          if (!choice) {
            console.error(`Choice "${choiceId}" not found`)
            break
          }
          choice.selected = true
          lastStep.selectedChoice = choice
          lastStep = makeStep(choice.next, choice.hash)
          if (!lastStep) break
          steps.push(lastStep)
        }
      }
      return steps
    },
    report() {
      return this.steps
        .filter((step) => step.selectedChoice)
        .map((step, index) => `${index + 1}. ${step.selectedChoice.summary}`)
        .join("\n")
    }
  },
  watch: {
    hash(hash) {
      const id = hash.substring(1)
      setTimeout(() => {
        const elm = document.getElementById(id)
        if (elm) elm.scrollIntoView({ behavior: "smooth" })
        else console.error(`Element with id "${id}" not found`)
      }, 300)
    }
  },
  methods: {
    choose(choice) {
      document.location.assign(choice.hash)
      ga("set", "page", document.location.pathname + document.location.hash)
      ga("send", "pageview")
    },
    async copyReport() {
      await navigator.clipboard.writeText(this.report)
      this.reportCopied = true
      await sleep(2000)
      this.reportCopied = false
    },
    createIssue() {
      const formData = new FormData(this.$refs.issueForm)

      const title = formData.get("title")
      let body = ""

      const description = formData.get("description")
      if (description) body += `**Description**\n${description}\n\n`

      body += `**Troubleshooter's report**\n${this.report}\n\n`

      const mcu = formData.get("mcu")
      const framework = formData.get("framework")
      const ide = formData.get("ide")
      if (mcu || framework || ide) {
        body += "**Environment**\n"
        if (mcu) body += "* Microcontroller: " + mcu + "\n"
        if (framework) body += "* Core/Framework: " + framework + "\n"
        if (ide) body += "* IDE: " + ide + "\n"
        body += "\n"
      }

      const repro = formData.get("repro")
      if (repro) {
        body += "**Reproduction code**\n```c++\n"
        body += repro
        body += "\n```\n\n"
      }

      const remarks = formData.get("remarks")
      if (remarks) body += `**Remarks**\n${remarks}\n\n`

      const queryString = new URLSearchParams({ title, body }).toString()
      const url =
        "https://github.com/bblanchon/ArduinoJson/issues/new?" + queryString
      console.log("URL", url)
      window.open(url, "_blank")

      $("#assistance-modal").modal("hide")
    }
  }
}
</script>

<style lang="scss">
@import "./assets/highlight.scss";

.troubleshooter-step {
  display: grid;
  grid-template-areas:
    "number content"
    "number choices";
  grid-template-columns: auto 1fr;
  column-gap: 1em;
}

.troubleshooter-step-number {
  grid-area: number;
}

.troubleshooter-step-number > div {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: normal;
  width: 1.7em;
  height: 1.7em;
}

.troubleshooter-step-content {
  grid-area: content;
}

.troubleshooter-step-choices {
  grid-area: choices;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
