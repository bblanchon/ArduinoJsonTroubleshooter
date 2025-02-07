import { ref, onMounted, onUnmounted } from "vue"

export function useRouteHash() {
  const hash = ref("")

  function onHashChange() {
    hash.value = location.hash
  }

  onMounted(() => {
    hash.value = location.hash
    window.addEventListener("hashchange", onHashChange)
  })

  onUnmounted(() => {
    window.removeEventListener("hashchange", onHashChange)
  })

  return hash
}
