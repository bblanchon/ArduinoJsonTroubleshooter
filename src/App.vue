<template>
  <div>
    <div v-html="intro.content"></div>
    <TransitionGroup name="fade" mode="out-in">
      <template v-for="step in steps" :key="step.hash">
        <TroubleshooterStep :id="step.id" :step="step" @choose="choose" />
      </template>
    </TransitionGroup>
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
import pages from "virtual:troubleshooter"

import AssistanceModal from "./components/AssistanceModal.vue"
import TroubleshooterStep from "./components/TroubleshooterStep.vue"

const sleep = (m) => new Promise((r) => setTimeout(r, m))

function makeStep(pageKey, hash, number) {
  const page = pages[pageKey]
  if (!page) return null
  return {
    ...page,
    number,
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
  components: { AssistanceModal, TroubleshooterStep },
  setup() {
    return {
      intro: pages["intro"]
    }
  },
  data() {
    return {
      reportCopied: false,
      hash: ""
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
      const steps = [makeStep("start", undefined, 1)]
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
          lastStep = makeStep(choice.next, choice.hash, lastStep.number + 1)
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
