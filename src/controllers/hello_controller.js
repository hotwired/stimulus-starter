import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "firstname", "lastname", "sexmale", "sexfemale", "age", "firstnamedisplay", "lastnamedisplay", "agedisplay", "genderdisplay", "formcontainer", "displaycontainer" ]

    save() {
        this.displaycontainerTarget.classList.remove("hidden")
        this.sexmaleTarget.checked || this.sexfemaleTarget.checked ? ( this.sexmaleTarget.checked ? this.genderdisplayTarget.innerHTML = "Male" : this.genderdisplayTarget.innerHTML = "Female" ) : this.genderdisplayTarget.innerHTML = "Gender not selected"
        this.firstnamedisplayTarget.innerHTML = this.firstnameTarget.value
        this.lastnamedisplayTarget.innerHTML = this.lastnameTarget.value
        this.agedisplayTarget.innerHTML = this.ageTarget.value
        this.formcontainerTarget.classList.add("hidden")
    }
    
    edit() {
        this.formcontainerTarget.classList.remove("hidden")
        this.firstnameTarget.value = this.firstnamedisplayTarget.innerHTML
        this.lastnameTarget.value = this.lastnamedisplayTarget.innerHTML
        this.ageTarget.value = this.agedisplayTarget.innerHTML
        this.genderdisplayTarget.innerHTML == "Male" ? this.sexmaleTarget.checked = true : this.sexfemaleTarget.checked = true
        this.displaycontainerTarget.classList.add("hidden")

    }

  }