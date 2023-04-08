<template>
  <div v-if="step.options" class="troubleshooter-step mb-4">
    <h2 class="small">
      <div class="troubleshooter-step-number">
        <div class="text-white rounded-circle" :class="active ? 'bg-primary' : 'bg-secondary'">
          {{ step.number }}
        </div>
      </div>
      <span v-if="debug" class="text-muted text-monospace">
        {{ step.filename }}
      </span>
    </h2>
    <div class="troubleshooter-step-content" v-html="step.content"></div>
    <div class="troubleshooter-step-options">
      <TroubleshooterStepOption v-for="option in step.options" :key="option.hash" :option="option"
        @click="$emit('choose', option)" />
    </div>
  </div>
  <div v-else v-html="step.content" class="troubleshooter-step-content" />
</template>

<script>
import { defineComponent } from "vue"
import TroubleshooterStepOption from "./TroubleshooterStepOption.vue"

export default defineComponent({
  inject: ["debug"],
  emits: ["choose"],
  props: {
    step: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  components: { TroubleshooterStepOption },
  async mounted() {
    const { top, bottom } = this.$el.getBoundingClientRect();
    const minVisibleHeight = 50
    const isVisible = top + minVisibleHeight < window.innerHeight;
    if (!isVisible) this.$el.scrollIntoView({ behavior: "smooth" })
  }
})
</script>

<style lang="scss">
@import "../assets/highlight.scss";

.troubleshooter-step {
  position: relative;
  padding-left: 3.5em;

  pre {
    background: #eeeeee;
    padding: 0.4rem 0.4rem;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }

  blockquote {
    border-left: 4px solid #ddd;
    padding: 0 0.8rem;
    color: #6c757d;

    p:last-child {
      margin-bottom: 0;
    }
  }
}

.code-wrap {
  pre {
    white-space: normal;
  }
}

.troubleshooter-step-number {
  position: absolute;
  left: 0px;
}

.troubleshooter-step-number>* {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: normal;
  width: 1.7em;
  height: 1.7em;
}
</style>
