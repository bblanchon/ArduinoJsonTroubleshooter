<template>
  <div v-if="step.options" class="troubleshooter-step mb-4">
    <TroubleshooterStepNumber :step="step" />
    <div v-html="step.content" class="troubleshooter-step-content" />
    <div class="troubleshooter-step-options">
      <TroubleshooterStepOption v-for="option in step.options" :key="option.hash" :option="option"
        @click="$emit('choose', option)" />
    </div>
  </div>
  <div v-else v-html="step.content" class="troubleshooter-step-content" />
</template>

<script>
import { defineComponent } from "vue"
import TroubleshooterStepOption from "./TroubleshooterStepOption.vue"
import TroubleshooterStepNumber from "./TroubleshooterStepNumber.vue"

export default defineComponent({
  inject: ["debug"],
  emits: ["choose"],
  props: {
    step: {
      type: Object,
      required: true
    }
  },
  components: { TroubleshooterStepOption, TroubleshooterStepNumber }
})
</script>

<style lang="scss">
@import "../assets/highlight.scss";

.troubleshooter-step {
  display: grid;
  grid-template-areas:
    "number content"
    "number options";
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

.troubleshooter-step-number>div {
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

.troubleshooter-step-options {
  grid-area: options;
}
</style>
