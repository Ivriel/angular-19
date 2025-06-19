import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl:string = "http://localhost:3000/users"
  constructor(private http:HttpClient) { }

  getUsers():Observable<Users[]>{ 
    return this.http.get<Users[]>(this.apiUrl)
  }

  saveUser(user:Users):Observable<Users>{
    return this.http.post<Users>(this.apiUrl,user)
  }

  deleteUser(id:string):Observable<Users>{
    return this.http.delete<Users>(this.apiUrl+"/"+id)
  }

  getSelectedUser(id:string):Observable<Users>{
    return this.http.get<Users>(this.apiUrl+"/"+id)
  }

  updateUser(id:string, user:Users):Observable<Users> {
    return this.http.put<Users>(this.apiUrl+"/"+id,user)
  }
}
