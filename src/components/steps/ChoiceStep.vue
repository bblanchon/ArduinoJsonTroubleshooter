<script setup lang="ts">
import ChoiceStepOption from "@/components/steps/ChoiceStepOption.vue"
import type { Step } from "@/troubleshooter"

const { step } = defineProps<{
  step: Step
}>()
</script>

<template>
  <div>
    <div v-html="step.content"></div>
    <ul class="list-unstyled m-0">
      <ChoiceStepOption
        v-for="option in step.options"
        :key="option.hash"
        :option="option"
      />
    </ul>
  </div>
</template>
