<script setup lang="ts">
import { inject } from "vue"

import type { Option } from "@/troubleshooter"

defineProps<{
  option: Option
}>()

const debug = inject("debug")
</script>

<template>
  <li>
    <a
      :href="option.hash"
      :class="{
        active: option.selected,
        disabled: option.missing,
      }"
    >
      <span class="checkmark"></span>
      <span v-html="option.label"></span>
    </a>
    <div v-if="debug" class="d-block mb-2 small text-muted">
      {{ option.summary }}
    </div>
  </li>
</template>

<style scoped>
a {
  color: var(--bs-body-color);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.checkmark {
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  margin-right: 0.8ch;
  content: "";
}

a.active .checkmark {
  color: white;
  border: 0.3em solid #00828a;
}

a.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
