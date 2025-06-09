import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop-contextual',
  standalone:true,
  imports: [],
  templateUrl: './for-loop-contextual.component.html',
  styleUrl: './for-loop-contextual.component.css'
})
export class ForLoopContextualComponent { 
  // $first,index,last,even,odd,count
  users:string[] =['TDK','CGK','AUS','NIGGER','DSD','DSDS','SD']

}
