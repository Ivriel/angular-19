import { Component,OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../interfaces/User';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-api',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './user-api.component.html',
  styleUrl: './user-api.component.css'
})
export class UserApiComponent implements OnInit {
  users:Users[] = []
  selectedUser:Users | undefined; 

  constructor(private usersService:UsersService){}
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.usersService.getUsers().subscribe((data:Users[])=> {
      console.log(data)
      this.users = data
    })
  }

  addOrUpdateUser(user:Users,form:NgForm){//bukan array karena add nya single user aja
   if(this.selectedUser) {
    // update user 
    this.usersService.updateUser(this.selectedUser.id,user).subscribe(()=> {
      this.getUsers()
      this.selectedUser = undefined // kalau udah selesai, di set ke undefined buat ngosongin nilai
      form.resetForm()
    })
   } else {
    // add user 
    this.usersService.saveUser(user).subscribe((data:Users)=> {
      console.log(data)
      if(data){
        this.getUsers()
        form.resetForm()
      }
    })
   }
  }

  deleteUser(id:string) {
    this.usersService.deleteUser(id).subscribe((data:Users)=> {
      console.log(data)
      if(data){
        this.getUsers()
      }
    })
  }

  selectUser(id:string){
    this.usersService.getSelectedUser(id).subscribe((data:Users)=> {
      console.log(data)
      this.selectedUser=data // ngisi variabel pakai nilai dari data yang dia
    })
  }
}
