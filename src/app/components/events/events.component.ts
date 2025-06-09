import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone:true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  handleEvent(event:Event){
    console.log("Event type:", event.type) // tipe event yang berjalan. didapat dari properti di console
    console.log("Event target:", (event.target as HTMLElement).tagName) // ambil nama tag yang udah di set di elemen. bungkus event target agar bisa diambil nama elemenenya 
    console.log("Event detected at:", new Date().toLocaleTimeString())
  }
}
