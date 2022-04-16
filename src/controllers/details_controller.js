import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "firstName", "lastName", "sexMale", "sexFemale", "age", "firstNameDisplay", "lastNameDisplay", "ageDisplay", "genderDisplay", "formContainer", "displayContainer" ]

    validatePatientForm() {
        if(this.firstNameTarget.value == ""){return alert("Please enter first name")}
        if(this.lastNameTarget.value == ""){return alert("Please enter last name")}
        if(!this.sexMaleTarget.checked && !this.sexFemaleTarget.checked){return alert("Please select gender")}
        if(this.ageTarget.value == ""){return alert("Please enter age")}
        this.displayPatientDetails()
    }
   
    displayPatientDetails() {
        // Show display-elements
        this.displayContainerTarget.classList.remove("hidden")
        // Get values from input fields and assign it to display elements
        this.sexMaleTarget.checked ? this.genderDisplayTarget.innerHTML = "Male" : this.genderDisplayTarget.innerHTML = "Female" 
        this.firstNameDisplayTarget.innerHTML = this.firstNameTarget.value
        this.lastNameDisplayTarget.innerHTML = this.lastNameTarget.value
        this.ageDisplayTarget.innerHTML = this.ageTarget.value
        // Hide Form
        this.formContainerTarget.classList.add("hidden")
    }
    
    editPatientDetails() {
        // Show form
        this.formContainerTarget.classList.remove("hidden")
        // Hide display-elements
        this.displayContainerTarget.classList.add("hidden")
    }

  }