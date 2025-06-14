import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-forms-validation',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-forms-validation.component.html',
  styleUrl: './reactive-forms-validation.component.css'
})
export class ReactiveFormsValidationComponent {
  formError: string = ''; // cuma menyimpan pesan error

  profileData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl(0,[Validators.required, Validators.min(16)]), // min atau max buat angka
    password: new FormControl('', [Validators.required,Validators.minLength(5)]), // min length atau max length buat teks
    email: new FormControl('', [Validators.required,Validators.maxLength(30),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
  })

  sendValues(){
    if(this.profileData.valid) {
      console.log(this.profileData.value)
      this.formError = ''; // Reset error message kalau form valid
      this.profileData.setValue({
        name:'',
        age: null, // supaya input field numbernya bersih
        password:'',
        email:''
      })
    } else {
      this.formError = 'Please fill all fields correctly'; // Set error message kalau form invalid
    }
  }  

  // getter method
  get name(){
    return this.profileData.get('name')
  }
  
  get age(){
    return this.profileData.get('age')
  }

  get email(){
    return this.profileData.get('email')
  }

  get password(){
    return this.profileData.get('password')
  }
}
