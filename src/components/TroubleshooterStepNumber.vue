<template>
  <h2 class="troubleshooter-step-number" :title="debug && step.slug">
    <div class="bg-secondary text-white rounded-circle">
      {{ step.number }}
      <span v-if="debug" class="sr-only">: {{ step.slug }}</span>
    </div>
  </h2>
</template>

<script>
export default {
  inject: ["debug"],
  props: {
    step: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
