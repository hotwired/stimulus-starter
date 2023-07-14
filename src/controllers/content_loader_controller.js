import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = { url: String, refreshInterval: Number }

  connect() {
    this.load()
    if (this.hasRefreshIntervalValue) {
      this.startRefreshing()
    }
  }

  // private

  startRefreshing() {
    setInterval(() => {
      this.load()
    }, this.refreshIntervalValue)
  }

  load() {
    fetch(this.urlValue)
      .then(response => response.text())
      .then(html => this.element.innerHTML = html)
  }
}
