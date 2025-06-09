import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone:true,
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
 color:string = '';

 handleColor(val:string){
  this.color = val
 }
 changeColor(event:Event){
    this.color = (event.target as HTMLInputElement).value
 }
}
