import { Component } from '@angular/core';
import { RouterOutlet,Router,RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'angular-19'

 constructor(private router:Router){}
//  goToProfile(name:string){
  // karena name sama dengan name (key nya name dan data yang diisi adalah dari parameter dengan variabel yang juga name, maka cukup ditulis name aja)
//   this.router.navigate(['profile'],{queryParams:{name}})
//  }
}
