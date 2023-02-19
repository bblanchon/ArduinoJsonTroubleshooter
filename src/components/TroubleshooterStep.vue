<template>
  <div v-if="step.options" class="troubleshooter-step mb-4">
    <h2 class="small">
      <div class="troubleshooter-step-number">
        <div class="bg-secondary text-white rounded-circle">
          {{ step.number }}
        </div>
      </div>
      <span v-if="debug" class="text-muted text-monospace">
        {{ step.filename }}
      </span>
    </h2>
    <div class="troubleshooter-step-content" v-html="step.content"></div>
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

export default defineComponent({
  inject: ["debug"],
  emits: ["choose"],
  props: {
    step: {
      type: Object,
      required: true
    }
  },
  components: { TroubleshooterStepOption }
})
</script>

<style lang="scss">
@import "../assets/highlight.scss";

.troubleshooter-step {
  position: relative;
  padding-left: 3.5em;

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
  position: absolute;
  left: 0px;
}

.troubleshooter-step-number>* {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: normal;
  width: 1.7em;
  height: 1.7em;
}
</style>
