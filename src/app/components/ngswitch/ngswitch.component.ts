import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngswitch',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './ngswitch.component.html',
  styleUrl: './ngswitch.component.css'
})
export class NgswitchComponent {
  color:string=''

  changeColor(color:string) {
    this.color=color
  }
}
