import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-user-reuse-child',
  standalone:true,
  imports: [],
  templateUrl: './user-reuse-child.component.html',
  styleUrl: './user-reuse-child.component.css'
})
export class UserReuseChildComponent {
@Input() user:string = '' // nama variabel disini harus sama dengan nama variabel yang diinput di parent 
}
