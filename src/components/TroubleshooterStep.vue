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

const { step } = defineProps<{
  step: Step
  active?: boolean
}>()

const debug = inject<boolean>("debug")

const containerRef = useTemplateRef("container")

onMounted(() => {
  const { top } = containerRef.value!.getBoundingClientRect()
  const minVisibleHeight = 50
  const isVisible = top + minVisibleHeight < window.innerHeight
  if (!isVisible) containerRef.value!.scrollIntoView({ behavior: "smooth" })
})

const stepComponent = computed<Component>(() => {
  if (step.options) return ChoiceStep
  else return FinalStep
})
</script>

<template>
  <div ref="container" class="mb-4">
    <div v-if="debug" class="small mb-1">
      <a
        :href="'vscode://file/' + step.fullPath!.replaceAll('\\', '/')"
        class="link-opacity-10 link-opacity-50-hover"
      >
        {{ step.filename! }}
      </a>
    </div>
    <component :is="stepComponent" :step="step" :active="active" />
  </div>
</template>

<style lang="scss">
@use "../assets/highlight.scss";
</style>
