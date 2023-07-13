import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["source"]
  // this.sourceTarget
  // this.sourceTargets
  // this.hasSourceTarget

  static classes = ["supported"]
  // this.supportedClass

  connect() {
    if ("clipboard" in navigator) {
      this.element.classList.add(this.supportedClass)
    }
  }

  copy(event) {
    event.preventDefault()
    navigator.clipboard.writeText(this.sourceTarget.value)
  }
}
