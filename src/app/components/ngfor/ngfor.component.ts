import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ngfor',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
  students:string[] = ["GG","CGK","ANY","GG"]
studentData=[
    {
      name:'C',
      age:10,
      died:false
    },
    {
      name:'D',
      age:12,
      died:false
    },
    {
      name:'F',
      age:11,
      died:true
    },
    {
      name:'G',
      age:13,
      died:true
    }
  ]
}
