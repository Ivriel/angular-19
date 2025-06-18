import { Component, OnInit,OnDestroy,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  standalone:true,
  imports: [],
  templateUrl: './lifecycle-child.component.html',
  styleUrl: './lifecycle-child.component.css'
})
export class LifecycleChildComponent implements OnChanges {

  @Input() counter:number=0;
  // constructor(){
  //   console.log("constructor") //ketika component dibuat
  // }
  // ngOnInit(): void {
  //   console.log("ngOnInit") // ketika component diinisialisasi
  // }
  // ngOnDestroy(): void {
  //   console.log("ngOnDestroy")
  // }
  ngOnChanges(): void {
    console.log("ngOnChanges")
  }
}
