import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  name=new FormControl()
  password = new FormControl()
  email = new FormControl()

  getValue(){
    console.log('Name:', this.name.value)
    console.log('Password:', this.password.value)
    console.log('Email:', this.email.value)
    this.name.setValue("")
    this.password.setValue("")
    this.email.setValue("")
  }

  setValue(){
    this.name.setValue("ivriel")
    this.password.setValue("1234")
    this.email.setValue("gunawanivriel@gmail.com")
  }
}
