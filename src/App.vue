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
        <div v-else v-html="step.content" :key="step.hash" :id="step.id"></div>
      </transition>
    </template>
  </div>
</template>

<script>
import pages from "./pages"

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

<style>
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
