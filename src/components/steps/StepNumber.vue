<script setup lang="ts">
defineProps<{
  number: number
  active?: boolean
}>()
</script>

<template>
  <h2 class="step-number" :class="{ active }">
    <span class="visually-hidden">Step</span>
    {{ number }}
  </h2>
</template>

<style lang="scss" scoped>
.step-number {
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
</style>
