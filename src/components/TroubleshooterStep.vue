<script setup lang="ts">
import {
  type Component,
  computed,
  inject,
  onMounted,
  useTemplateRef,
} from "vue"

import ChoiceStep from "@/components/steps/ChoiceStep.vue"
import FinalStep from "@/components/steps/FinalStep.vue"
import type { Step } from "@/troubleshooter"
import StepNumber from "./steps/StepNumber.vue"

const { step } = defineProps<{
  number: number
  step: Step
  active?: boolean
}>()

const debug = inject<boolean>("debug")

const containerRef = useTemplateRef("container")

function isVisible() {
  const { top } = containerRef.value!.getBoundingClientRect()
  const minVisibleHeight = 50
  return top + minVisibleHeight < window.innerHeight
}

function scrollToView() {
  containerRef.value!.scrollIntoView({ behavior: "smooth" })
}

onMounted(() => {
  if (!isVisible()) setTimeout(scrollToView, 50)
})

const stepComponent = computed<Component>(() => {
  if (step.options) return ChoiceStep
  else return FinalStep
})

const showStepNumber = computed<boolean>(() => !!step.options)
</script>

<template>
  <div ref="container" class="mb-4 step">
    <div v-if="debug" class="small mb-1">
      <a
        :href="'vscode://file/' + step.fullPath!.replaceAll('\\', '/')"
        class="link-opacity-10 link-opacity-50-hover"
      >
        {{ step.filename! }}
      </a>
    </div>
    <div class="d-flex gap-3">
      <StepNumber
        v-if="showStepNumber"
        :number="number"
        :active="active"
        class="flex-shrink-0"
      />
      <component :is="stepComponent" :step="step" class="flex-fill" />
    </div>
  </div>
</template>

<style lang="scss">
@use "../assets/highlight.scss";

.step {
  position: relative;

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
</style>
