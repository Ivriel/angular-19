import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form-validation',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form-validation.component.html',
  styleUrl: './template-form-validation.component.css'
})
export class TemplateFormValidationComponent {
  userForm: any = null

  submitData(val:FormData){
    this.userForm = val
    console.log(this.userForm)
  }
}
