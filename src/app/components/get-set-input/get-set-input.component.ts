import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set-input',
  standalone:true,
  imports: [],
  templateUrl: './get-set-input.component.html',
  styleUrl: './get-set-input.component.css'
})
export class GetSetInputComponent {
 username="";
 templateUsername="";
  getUserName(event:Event){ 
     this.username= (event.target as HTMLInputElement).value 
  }
  setUserName(){
    this.username="f0rgotten"
  }
  getUserNameWithTemplate(val:string){
    this.templateUsername = val
  }
}
