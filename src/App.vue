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
      <AssistanceModal id="assistance-modal" :report="report" />
    </div>
  </div>
</template>

<script>
import pages from "./pages"
import AssistanceModal from "./components/AssistanceModal.vue"

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
  components: { AssistanceModal },
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
    async hash(hash) {
      const id = hash.substring(1)
      await sleep(300)
      const elm = document.getElementById(id)
      if (elm) elm.scrollIntoView({ behavior: "smooth" })
      else console.error(`Element with id "${id}" not found`)
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
  pre {
    background: #eeeeee;
    padding: 0.4rem 0.4rem;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }
}

.code-wrap {
  pre {
    white-space: normal;
  }
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
