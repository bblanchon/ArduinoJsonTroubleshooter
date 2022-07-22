<template>
  <div v-if="step.choices.length" class="troubleshooter-step mb-4">
    <h2
      class="troubleshooter-step-number"
      :id="step.id"
      :title="debug && step.slug"
    >
      <div class="bg-secondary text-white rounded-circle">
        {{ index }}
        <span v-if="debug" class="sr-only">: {{ step.slug }}</span>
      </div>
    </h2>
    <component :is="step.component" class="troubleshooter-step-content" />
    <div class="troubleshooter-step-choices">
      <div
        v-for="choice in step.choices"
        :key="choice.label"
        class="form-check"
      >
        <input
          type="radio"
          :name="step.id"
          :id="choice.inputId"
          class="form-check-input"
          :checked="choice.selected"
          @click="$emit('choose', choice)"
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
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  inject: ["debug"],
  emits: ["choose"],
  props: {
    step: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  }
})
</script>

<style lang="scss">
@import "../assets/highlight.scss";

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
</style>
