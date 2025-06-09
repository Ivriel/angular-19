import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-two-way-binding',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {
  name:string='gotten'

  // function ini sama fungsinya dengan ng model. yaitu menyambungkan antara input dan h1. agar nilai dari input bisa ditampilkan di h1 secara live 
  // changeName(event:Event){
  //   const value = (event.target as HTMLInputElement).value
  //   this.name = value
  // }
}
