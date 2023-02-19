<template>
  <h2 class="troubleshooter-step-number" :title="step.filename">
    <div class="bg-secondary text-white rounded-circle">
      {{ step.number }}
      <span v-if="debug" class="sr-only">: {{ step.filename }}</span>
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
