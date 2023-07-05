import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["name"];

  greet() {
    const element = this.nameTarget;
    const name = element.value;

    console.log(`Hello ${name}!`);
  }
}
