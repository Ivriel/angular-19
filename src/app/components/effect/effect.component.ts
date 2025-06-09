import { Component,effect,signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  standalone:true,
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css'
})
export class EffectComponent {
  userName = signal('ivriel')
  count = signal<number>(0)
  displayHeading:boolean = false

  constructor(){
    effect(()=> { // untuk menanggulangi update lanjutan dari signal. kalau signalnya adalah 2 , maka tampilkan heading.itu ditanggulangi di effect
      if(this.count()==2) { // efek menangkap nilai 2 kemudian eksekusi perintah lanjutan 
        this.displayHeading = true

        setTimeout(() => {
            this.displayHeading = false // kalau udah di 2 (valuenya), tampilkan heading selama 2 detik saja baru abis gitu ilang 
        }, 2000);

      } else {
        this.displayHeading=false
      }
    }) 
  }

}
