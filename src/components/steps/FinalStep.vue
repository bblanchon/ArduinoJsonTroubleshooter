<script setup lang="ts">
import type { Step } from "@/troubleshooter"

const { step } = defineProps<{
  step: Step
}>()
</script>

<template>
  <div v-html="step.content"></div>
</template>
