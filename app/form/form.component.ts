import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    address: new FormGroup({
      state: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required)
    })

  })


  set() {
    this.form.setValue(
      {
        firstname: 'aman', lastname: "rajput",
        address: { state: "gujarat", city: "ahmedabad" }
      }
    )
  }
}
