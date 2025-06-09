import { Component,computed,Signal,signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals2',
  standalone:true,
  imports: [],
  templateUrl: './signals2.component.html',
  styleUrl: './signals2.component.css'
})
export class Signals2Component {
  // data = signal<number | string >(10) // tipe data untuk signal
  data:WritableSignal<number> = signal(10) // tipe data untuk signal value
  count:Signal<number>=computed(()=>20) // tipe data untuk computed signal dan computed signal value. read only (computed signal)

  updateValue(){
    // this.data.set(true)
    this.data.update(val=>val+10)
  }
}
