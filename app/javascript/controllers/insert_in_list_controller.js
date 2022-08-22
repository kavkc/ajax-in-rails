import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items", "form"]
  connect() {
    // console.log("I am connected to insert_in_list controller")
    // console.log("my form", this.formTarget)
    // console.log("my items", this.itemsTarget)
    // console.log("my controller", this.element)
    this.csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content")
  }

  send(event) {
    event.preventDefault()
    const url = this.formTarget.action
    // console.log(this.formTarget.action)
    const options = {
      method: "POST",
      headers: { "Accept": "application/json", "X-CSRF-Token": this.csrfToken },
      body: new FormData(this.formTarget)
    }
    fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      console.log("review", data.my_inserted_item)
      console.log("review", data.my_form_item)
      // if (data.inserted_item) {
      //   this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item)
      // }
      // this.formTarget.outerHTML = data.form
    })
  }
}
