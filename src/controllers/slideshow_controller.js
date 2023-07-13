import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["slide"]
  static values = { index: Number }

  initialize() {
    this.showCurrentSlide()
  }

  connect() {
  }

  previous() {
    this.indexValue--
    this.showCurrentSlide()
  }

  next() {
    this.indexValue++
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue
    })
  }
}
