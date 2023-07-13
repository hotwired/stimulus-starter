import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["slide"]

  initialize() {
    this.index = 0
    this.showCurrentSlide()
  }

  connect() {
  }

  previous() {
    this.index--
    this.showCurrentSlide()
  }

  next() {
    this.index++
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.index
    })
  }
}
