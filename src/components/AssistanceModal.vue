<script setup lang="ts">
import { useTemplateRef } from "vue"

const { report } = defineProps<{
  report: string
}>()

const formRef = useTemplateRef<HTMLFormElement>("issueForm")
const modalRef = useTemplateRef<HTMLDivElement>("modal")

function createIssue() {
  const formData = new FormData(formRef.value!)

  const title = formData.get("title") as string
  let body = ""

  const description = formData.get("description")
  if (description) body += `**Description**\n${description}\n\n`

  body += `**Troubleshooter's report**\n${report}\n\n`

  const mcu = formData.get("mcu")
  const framework = formData.get("framework")
  const ide = formData.get("ide")
  if (mcu || framework || ide) {
    body += "**Environment**\n"
    if (mcu) body += "* Microcontroller: " + mcu + "\n"
    if (framework) body += "* Core/Framework: " + framework + "\n"
    if (ide) body += "* IDE: " + ide + "\n"
    body += "\n"
  }

  const repro = formData.get("repro")
  if (repro) {
    body += "**Reproduction code**\n```c++\n"
    body += repro
    body += "\n```\n\n"
  }

  const remarks = formData.get("remarks")
  if (remarks) body += `**Remarks**\n${remarks}\n\n`

  const queryString = new URLSearchParams({ title, body }).toString()
  const url =
    "https://github.com/bblanchon/ArduinoJson/issues/new?" + queryString
  console.log("URL", url)
  window.open(url, "_blank")

  bootstrap.Modal.getInstance(modalRef.value!).hide()
}
</script>

<template>
  <div class="modal fade" ref="modal">
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <form class="modal-content" ref="issueForm" @submit.prevent="createIssue">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title">Contact support</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-info">
            This form simplifies the creation of an issue on ArduinoJson's
            GitHub project page. It ensures you provide all the required
            information and prefills the issue's text. After that, you just need
            to submit the issue.<br />
            <b>A GitHub account is required.</b>
          </div>
          <div class="mb-3">
            <label for="title-input">Title</label>
            <input
              type="text"
              name="title"
              class="form-control"
              id="title-input"
              aria-describedby="title-help"
              required
            />
            <small id="title-help" class="form-text text-muted"
              >Summarize your issue in one sentence.</small
            >
          </div>
          <div class="mb-3">
            <label for="description-input">Description</label>
            <textarea
              name="description"
              rows="3"
              class="form-control"
              id="description-input"
              aria-describedby="description-help"
              required
              placeholder="When I do ..., I expect ..., but instead I get ..."
            ></textarea>
            <small id="description-help" class="form-text text-muted"
              >Describe your issue with a few sentences.</small
            >
          </div>
          <div class="mb-3">
            <label for="mcu-input">Microcontroller</label>
            <input
              type="text"
              name="mcu"
              class="form-control"
              id="mcu-input"
              aria-describedby="mcu-help"
              placeholder="ESP8266"
              required
            />
            <small id="mcu-help" class="form-text text-muted"
              >Which processor or with board do you use?</small
            >
          </div>
          <div class="mb-3">
            <label for="framework-input">Arduino Core / Framework</label>
            <input
              type="text"
              name="framework"
              class="form-control"
              id="framework-input"
              aria-describedby="framework-help"
              placeholder="ESP8266 core for Arduino v3.0.2"
            />
            <small id="framework-help" class="form-text text-muted"
              >Please include version number.</small
            >
          </div>
          <div class="mb-3">
            <label for="ide-input">IDE</label>
            <input
              type="text"
              name="ide"
              class="form-control"
              id="ide-input"
              aria-describedby="ide-help"
              placeholder="Arduino IDE 1.8.16"
            />
            <small id="ide-help" class="form-text text-muted"
              >Please include version number.</small
            >
          </div>
          <div class="mb-3">
            <label for="repro-input">Reproduction code</label>
            <textarea
              name="repro"
              rows="10"
              class="form-control text-monospace"
              style="font-size: 80%"
              id="repro-input"
              aria-describedby="repro-help"
              placeholder="DynamicJsonDocuemnt doc(1024);\n..."
            ></textarea>
            <small id="repro-help" class="form-text text-muted"
              >Write a few lines of code that demonstrate the issue.</small
            >
          </div>
          <div class="mb-3">
            <label for="remarks-input">Remarks</label>
            <textarea
              name="remarks"
              rows="4"
              class="form-control"
              id="remarks-input"
              aria-describedby="remarks-help"
            ></textarea>
            <small id="remarks-help" class="form-text text-muted"
              >Anything else you need to tell us?</small
            >
          </div>
        </div>
        <div class="modal-footer">
          <div class="text-right">
            <button type="submit" class="btn btn-primary">Submit</button>
            <small class="form-text text-muted">
              This button redirects you to GitHub.
            </small>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
