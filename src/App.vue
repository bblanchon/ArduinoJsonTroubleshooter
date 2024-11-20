<script setup lang="ts">
import { ref, onMounted, computed } from "vue"

import AssistanceModal from "./components/AssistanceModal.vue"
import TroubleshooterStep from "./components/TroubleshooterStep.vue"
import { getSteps, generateReport, type Option } from "./troubleshooter"

const sleep = (m: number) => new Promise((r) => setTimeout(r, m))

const reportCopied = ref(false)
const hash = ref("")

onMounted(() => {
  hash.value = location.hash
  window.addEventListener("hashchange", () => (hash.value = location.hash))
})

const steps = computed(() => getSteps(hash.value))

const needsAssistance = computed(() => {
  const currentStep = steps.value[steps.value.length - 1]
  return !!currentStep.tags?.includes("needs_assistance")
})

const report = computed(() => generateReport(steps.value))

function choose(option: Option) {
  document.location.assign(option.hash)
  window.plausible("ArduinoJson Troubleshooter", {
    props: {
      hash: document.location.hash,
    },
  })
}

async function copyReport() {
  await navigator.clipboard.writeText(report.value)
  reportCopied.value = true
  await sleep(2000)
  reportCopied.value = false
}
</script>

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
    <Transition
      v-for="(step, idx) in steps"
      :key="idx"
      name="fade"
      mode="out-in"
    >
      <TroubleshooterStep
        :key="step.hash"
        :step="step"
        @choose="choose"
        :active="idx == steps.length - 1"
      />
    </Transition>
    <div v-if="needsAssistance">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#assistance-modal"
      >
        Contact support
      </button>
      <button
        class="btn"
        :class="{
          'btn-outline-primary': !reportCopied,
          'btn-success': reportCopied,
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
