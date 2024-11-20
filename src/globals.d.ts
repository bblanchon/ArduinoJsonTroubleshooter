declare namespace bootstrap {
  interface Modal {
    hide()
  }

  const Modal: {
    getInstance(el: HTMLElement): Modal
  }
}

function plausible(
  eventName: string,
  options?: {
    props?: { [propName: string]: string | number | boolean }
  },
): void
