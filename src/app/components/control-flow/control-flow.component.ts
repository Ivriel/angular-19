import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone:true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  display:boolean =  true
  val:number = 10
  displayOneDiv:boolean=true

  hide(){
    this.display = false
  }
  show(){
    this.display = true
  }
  toggle(){
    this.display = !this.display
  }
  toggleDivs(){
    this.displayOneDiv = !this.displayOneDiv
  }
}
