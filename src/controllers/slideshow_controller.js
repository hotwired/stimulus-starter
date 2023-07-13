import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["slide"]
  static values = { index: Number }

  // initialize() {
  //   this.showCurrentSlide()
  // }

  connect() {
  }

  previous() {
    this.indexValue--
  }

  next() {
    this.indexValue++
  }

  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue
    })
  }
}
