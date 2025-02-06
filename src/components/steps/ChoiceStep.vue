<script setup lang="ts">
import { inject } from "vue"

import ChoiceStepOption from "@/components/steps/ChoiceStepOption.vue"
import type { Step } from "@/troubleshooter"

const debug = inject<boolean>("debug")

const { step } = defineProps<{
  step: Step
  active?: boolean
}>()
</script>

<template>
  <div class="step">
    <h2 class="step-number" :class="{ active }">
      <span class="visually-hidden">Step</span>
      {{ step.number }}
    </h2>
    <div class="step-content" v-html="step.content"></div>
    <ul class="step-options">
      <ChoiceStepOption
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
</template>

<style lang="scss" scoped>
.step {
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

.step-number {
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

.step-options {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
