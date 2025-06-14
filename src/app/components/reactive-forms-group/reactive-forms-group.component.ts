import { Component } from '@angular/core';
import { FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-group',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms-group.component.html',
  styleUrl: './reactive-forms-group.component.css'
})
export class ReactiveFormsGroupComponent {
  profileForm = new FormGroup({
    name:new FormControl('Gunawan'),
    password: new FormControl(123),
    email: new FormControl('pop')
  })

  submitData(){
    console.log(this.profileForm.value)
  }

  setValues(){
    this.profileForm.setValue({
      name:'F0rgotten',
      password:124,
      email:'gotten@gmail.com'
    })
  }
}
