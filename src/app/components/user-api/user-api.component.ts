import { Component,OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

export interface Users {
  id:number;
  name:string;
  age:number;
  email:string
}
@Component({
  selector: 'app-user-api',
  standalone:true,
  imports: [],
  templateUrl: './user-api.component.html',
  styleUrl: './user-api.component.css'
})
export class UserApiComponent implements OnInit {
  users:Users[] = []

  constructor(private usersService:UsersService){}
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data)=> {
      console.log(data)
      this.users = data
    })
  }
}
