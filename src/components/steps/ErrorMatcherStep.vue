<script setup lang="ts">
import type { Option, Step } from "@/troubleshooter"
import { ref, watch } from "vue"
import ChoiceStepOption from "./ChoiceStepOption.vue"
import { useRouteHash } from "@/composable/router"

const { step } = defineProps<{
  step: Step
}>()

const input = ref("")

const selectedOption = ref<Option>()

type DisplayMode = "textarea" | "choices"

const displayMode = ref<DisplayMode>()

const hash = useRouteHash()

watch(
  hash,
  () => {
    displayMode.value = hash.value === step.hash ? "textarea" : "choices"
  },
  { immediate: true },
)

const invalidFeedback = ref("")

function scan() {
  invalidFeedback.value = ""
  const match = input.value.match(/error: (.*)$/m)
  if (match) {
    const errorText = match[1]
    console.log(step.options)
    const option =
      step.options!.find(
        (o) => o.regex && errorText.match(new RegExp(o.regex)),
      ) || step.options![step.options!.length - 1]
    window.location.hash = option.hash
  } else {
    invalidFeedback.value = input.value
      ? "There should be a line starting with 'error: '"
      : "Please paste the compiler output"
  }
}
</script>

<template>
  <div>
    <div v-html="step.content"></div>
    <ul v-if="displayMode === 'choices'" class="list-unstyled m-0">
      <ChoiceStepOption
        v-for="option in step.options"
        :key="option.hash"
        :option="option"
      />
    </ul>
    <form v-if="displayMode == 'textarea'" @submit.prevent="scan">
      <div class="mb-3">
        <textarea
          class="form-control"
          :class="{ 'is-invalid': invalidFeedback }"
          rows="6"
          placeholder="Paste compiler output here!"
          v-model.trim="input"
        ></textarea>
        <div v-if="invalidFeedback" class="invalid-feedback">
          {{ invalidFeedback }}
        </div>
      </div>
      <button type="submit" class="btn btn-primary">
        Scan compiler output
      </button>
      <button
        type="button"
        class="btn btn-link"
        @click="displayMode = 'choices'"
      >
        Let me pick in a list
      </button>
    </form>
  </div>
</template>
