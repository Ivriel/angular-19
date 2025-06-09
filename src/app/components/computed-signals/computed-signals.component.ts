import { Component,signal,computed} from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  standalone:true,
  imports: [],
  templateUrl: './computed-signals.component.html',
  styleUrl: './computed-signals.component.css'
})
export class ComputedSignalsComponent {
  x=signal(20)
  y=signal(30)
  z=computed(()=>this.x()+this.y())

  updateValue(){
    console.log(this.z())
    this.x.set(100)
    console.log(this.z())
  }
  updateXValue(){
    this.x.set(1000)
  }
}
