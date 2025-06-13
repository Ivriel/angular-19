import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  standalone:true,
  imports: [],
  templateUrl: './dynamic-styling.component.html',
  styleUrl: './dynamic-styling.component.css'
})
export class DynamicStylingComponent {
    color:string="red"
    fontSize:string="30px"
    fontSizeBigger:string="100px"
    zoom:boolean = false
    size:number=60

    zoomToggle(){
      this.zoom= this.zoom =! this.zoom
    }
}
