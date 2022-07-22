<template>
  <div class="form-check">
    <input
      type="radio"
      :id="choice.inputId"
      class="form-check-input"
      :checked="choice.selected"
      @click="$emit('check')"
      :disabled="choice.missing"
    />
    <label
      class="form-check-label"
      :for="choice.inputId"
      v-html="choice.label"
    ></label>
    <div
      v-if="debug"
      class="d-block mb-2 small text-muted"
      v-html="choice.summary"
    ></div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  inject: ["debug"],
  emits: ["check"],
  props: {
    choice: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped></style>
