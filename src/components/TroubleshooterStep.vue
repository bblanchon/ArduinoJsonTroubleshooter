<script setup lang="ts">
import { inject, onMounted, useTemplateRef } from "vue"

import TroubleshooterStepOption from "@/components/TroubleshooterStepOption.vue"
import type { Step } from "@/troubleshooter"

const debug = inject<boolean>("debug")

defineProps<{
  step: Step
  active?: boolean
}>()

const containerRef = useTemplateRef("container")

onMounted(() => {
  const { top } = containerRef.value!.getBoundingClientRect()
  const minVisibleHeight = 50
  const isVisible = top + minVisibleHeight < window.innerHeight
  if (!isVisible) containerRef.value!.scrollIntoView({ behavior: "smooth" })
})
</script>

<template>
  <div v-if="step.options" class="troubleshooter-step mb-4" ref="container">
    <h2 class="troubleshooter-step-number" :class="{ active }">
      <span class="visually-hidden">Step</span>
      {{ step.number }}
    </h2>
    <div class="troubleshooter-step-content" v-html="step.content"></div>
    <ul class="troubleshooter-step-options">
      <TroubleshooterStepOption
        v-for="option in step.options"
        :key="option.hash"
        :option="option"
      />
    </ul>
    <p v-if="debug" class="small">
      <a :href="'vscode://file/' + step.fullPath!.replaceAll('\\', '/')">
        {{ step.filename! }}
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
  top: 0;
  left: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: normal;
  width: 1.7em;
  height: 1.7em;
  color: white;
  background-color: var(--bs-secondary);

  &.active {
    background-color: var(--bs-primary);
  }
}

.troubleshooter-step-options {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
