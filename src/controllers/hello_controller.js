import { Controller } from "stimulus"

export default class HelloController extends Controller {
  greet() {
    alert(`Hello, ${this.name}!`)
  }

  get name() {
    return this.inputElement.value
  }

  get inputElement() {
    return this.targets.find("name")
  }
}
