import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-parent-user',
  standalone:true,
  imports: [UserComponent],
  templateUrl: './parent-user.component.html',
  styleUrl: './parent-user.component.css'
})
export class ParentUserComponent {
  userName=""

  changeUser(val:string){ 
    this.userName = val
  }

  userCity= ""

  changeCity(val:string){
    this.userCity = val
  }
}
