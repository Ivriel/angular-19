import { Component,Input } from '@angular/core';
import { UserReuseChildComponent } from '../user-reuse-child/user-reuse-child.component';

@Component({
  selector: 'app-user-reuse',
  standalone:true,
  imports: [UserReuseChildComponent],
  templateUrl: './user-reuse.component.html',
  styleUrl: './user-reuse.component.css'
})
export class UserReuseComponent {
  users:string[] = ['Anil','Bruce','Peter','John','Tony']
}
