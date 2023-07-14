import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = { url: String }

  connect() {
    this.load()
  }

  // private

  load() {
    fetch(this.urlValue)
      .then(response => response.text())
      .then(html => this.element.innerHTML = html)
  }
}
