import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngif',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
  login:boolean = false
  show:boolean = true
  block:number= 1

  toggle(){
    this.show = !this.show
  }
  update(){
    this.block++
  }
  loginUpdate(){
    this.login = !this.login
  }
}
