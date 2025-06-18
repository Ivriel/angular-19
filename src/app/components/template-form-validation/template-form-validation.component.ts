import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface UserFormData {
  name: string;
  email: string;
  address: string;
  password: string;
  gender: string;
}

@Component({
  selector: 'app-template-form-validation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form-validation.component.html',
  styleUrl: './template-form-validation.component.css'
})

export class TemplateFormValidationComponent {
  userForm: UserFormData | null = null;
  isSubmitted = false;

  submitData(val: UserFormData) {
    this.userForm = val;
    this.isSubmitted = true;
    console.log(this.userForm);
  }
}
