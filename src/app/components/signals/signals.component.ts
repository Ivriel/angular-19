import { Component,effect,signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone:true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
// data:number = 100
count = signal(10)

constructor(){
  effect(()=>{
    console.log(this.count())
  })
}

updateValue(command:string){
  // this.data=200
  if(command =='inc') {
    this.count.set(this.count()+1)
  } else if(command == 'dec'){
    if(this.count()>0) {
      this.count.set(this.count()-1)
    }
  } else {
    this.count.set(0)
  }
}


}
