<script setup lang="ts">
import type { Option, Step } from "@/troubleshooter"
import { computed, ref, watch } from "vue"

const { step } = defineProps<{
  step: Step
}>()

const input = ref("")
const errorText = computed<string>(() => {
  const match = input.value.match(/error: (.*)$/m)
  return match ? match[1] : ""
})

const matchingOption = computed<Option | undefined>(() =>
  step.options!.find((option) =>
    errorText.value.match(new RegExp(option.label, "i")),
  ),
)

watch(
  matchingOption,
  (option) => {
    window.location.href = option?.hash || step.hash
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div>
    <div v-html="step.content"></div>
    <textarea
      class="form-control mb-3"
      rows="6"
      placeholder="Paste compiler output here!"
      v-model.lazy.trim="input"
    ></textarea>
    <div
      v-if="errorText"
      class="alert"
      :class="{
        'alert-success': matchingOption,
        'alert-warning': !matchingOption,
      }"
    >
      <div>
        Found the following error:
        <code class="text-truncate">{{ errorText }}</code>
      </div>
      <div v-if="!matchingOption">
        Unfortunately, I don't have a solution for this error yet.
      </div>
    </div>
    <div v-else-if="input" class="alert alert-error">
      No error message found.<br />
      There should be a line starting with <code>error: </code>, make sure to
      include it.
    </div>
  </div>
</template>
