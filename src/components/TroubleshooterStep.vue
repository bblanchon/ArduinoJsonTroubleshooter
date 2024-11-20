<script setup>
import { inject, onMounted, useTemplateRef } from "vue"

import TroubleshooterStepOption from "./TroubleshooterStepOption.vue"

const debug = inject("debug")

const emit = defineEmits(["choose"])

const props = defineProps({
  step: {
    type: Object,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
})

const containerRef = useTemplateRef("container")

onMounted(() => {
  const { top, bottom } = containerRef.value.getBoundingClientRect()
  const minVisibleHeight = 50
  const isVisible = top + minVisibleHeight < window.innerHeight
  if (!isVisible) containerRef.value.scrollIntoView({ behavior: "smooth" })
})
</script>

<template>
  <div v-if="step.options" class="troubleshooter-step mb-4" ref="container">
    <h2>
      <div class="troubleshooter-step-number">
        <div
          class="text-white rounded-circle"
          :class="active ? 'bg-primary' : 'bg-secondary'"
        >
          {{ step.number }}
        </div>
      </div>
    </h2>
    <div class="troubleshooter-step-content" v-html="step.content"></div>
    <div class="troubleshooter-step-options">
      <TroubleshooterStepOption
        v-for="option in step.options"
        :key="option.hash"
        :option="option"
        @click="$emit('choose', option)"
      />
    </div>
    <p v-if="debug" class="small">
      <a :href="'vscode://file/' + step.fullPath.replaceAll('\\', '/')">
        {{ step.filename }}
      </a>
    </p>
  </div>
  <div
    v-else
    v-html="step.content"
    class="troubleshooter-step-content"
    ref="container"
  />
</template>

<style lang="scss">
@use "../assets/highlight.scss";

.troubleshooter-step {
  position: relative;
  padding-left: 3.5em;

  pre {
    background: #eeeeee;
    padding: 0.4rem 0.4rem;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }

  blockquote {
    border-left: 4px solid #ddd;
    padding: 0 0.8rem;
    color: #6c757d;

    p:last-child {
      margin-bottom: 0;
    }
  }
}

.troubleshooter-step-number {
  position: absolute;
  left: 0px;
}

.troubleshooter-step-number > * {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: normal;
  width: 1.7em;
  height: 1.7em;
}
</style>
