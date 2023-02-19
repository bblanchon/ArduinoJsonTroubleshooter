<template>
  <div>
    <div>
      <p>Hi!</p>
      <p>
        I'm the <i>ArduinoJson Troubleshooter</i>, and I'm here to help you fix
        your problem. I'll ask you a series of questions and give you some
        instructions along the way.
      </p>
      <p>Ready? Here we go!</p>
    </div>
    <TransitionGroup name="fade" mode="out-in">
      <template v-for="step in steps" :key="step.hash">
        <TroubleshooterStep :id="step.id" :step="step" @choose="choose" />
      </template>
    </TransitionGroup>
    <div v-if="needsAssistance">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#assistance-modal">
        Contact support
      </button> <button class="btn" :class="{
        'btn-outline-primary': !reportCopied,
        'btn-success': reportCopied
      }" :disabled="reportCopied" @click="copyReport">
        {{ reportCopied ? "✓ Report copied" : "Copy troubleshooter's report" }}
      </button>
      <AssistanceModal id="assistance-modal" :report="report" />
    </div>
  </div>
</template>

<script>
import AssistanceModal from "./components/AssistanceModal.vue"
import TroubleshooterStep from "./components/TroubleshooterStep.vue"
import { getSteps, generateReport } from "./troubleshooter"

const sleep = (m) => new Promise((r) => setTimeout(r, m))

export default {
  components: { AssistanceModal, TroubleshooterStep },
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
    needsAssistance() {
      const currentStep = this.steps[this.steps.length - 1]
      return !!currentStep.tags?.includes("needs_assistance")
    },
    steps() {
      return getSteps(this.hash)
    },
    report() {
      return generateReport(this.steps)
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
    choose(option) {
      document.location.assign(option.hash)
      ga("set", "page", document.location.pathname + document.location.hash)
      ga("send", "pageview")
    },
    async copyReport() {
      await navigator.clipboard.writeText(this.report)
      this.reportCopied = true
      await sleep(2000)
      this.reportCopied = false
    },
    hasTag(tag) {
      return
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
