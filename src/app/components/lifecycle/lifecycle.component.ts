import { afterRender, Component, ViewChild } from '@angular/core';
import { LifecycleChildComponent } from '../lifecycle-child/lifecycle-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle',
  standalone:true,
  imports: [LifecycleChildComponent,CommonModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {
  @ViewChild('user') LifecycleChild:any
  counter:number =0
  constructor(){
    afterRender(()=> {
      console.log("afterRender", this.LifecycleChild.counter)
    })
  }
  updateCounter(){
    this.counter++
    console.log('Counter value:', this.counter)
  }
}
