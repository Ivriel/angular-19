import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  standalone:true,
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {
 users:string[] =['Ivriel','Wynsc','f0rgotten','Gunawan']
 students:any[] = [
  {
    name:'Ivriel',
    age:17,
    email:'gmail.com',
    died:false
  },
  {
    name:'Wynsc',
    age:30,
    email:'gmail.com',
    died:true
  },
  {
    name:'g0tten',
    age:27,
    email:'gmail.com',
    died:false
  },
  {
    name:'Gunawan',
    age:7,
    email:'gmail.com',
    died:false
  }
 ]

 getName(name:string){
  console.log('Student name:', name)
 }
}
