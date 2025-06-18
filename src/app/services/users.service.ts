import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../components/user-api/user-api.component';
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
}
