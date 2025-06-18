import { Component,OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone:true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent{
  @Output() getUsers= new EventEmitter() // untuk mengirim data ke parent component. Tepatnya dikirim ke function penerima di parent component 
  users:string[] = ["Anil","Peter","Bruce","Tony","Sam"]

  // ngOnInit(): void {
  //   this.getUsers.emit(this.users)
  // }
 
  passData(){
    this.getUsers.emit(this.users)
  }
}
