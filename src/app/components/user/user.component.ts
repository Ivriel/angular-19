import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone:true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // menerima data yang dimasukkan dari parent (kaya props)
@Input() user:string=''
@Input() city:string=''


}
