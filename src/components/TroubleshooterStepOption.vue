<script setup>
import { inject } from "vue"

defineProps({
  option: {
    type: Object,
    required: true,
  },
})

const debug = inject("debug")

const emit = defineEmits(["check"])
</script>

<template>
  <div class="form-check">
    <input
      type="radio"
      :id="option.inputId"
      class="form-check-input"
      :checked="option.selected"
      @click="$emit('check')"
      :disabled="option.missing"
    />
    <label
      class="form-check-label"
      :for="option.inputId"
      v-html="option.label"
    ></label>
    <div v-if="debug" class="d-block mb-2 small text-muted">
      {{ option.summary }}
    </div>
  </div>
</template>
