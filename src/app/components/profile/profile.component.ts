import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone:true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userName:string|null='';

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    // dapatkan data dari url
    // this.userName  = this.route.snapshot.paramMap.get('name')
    // dapatkan data dari input function button
    // this.route.queryParams.subscribe((params)=> {
    //   this.userName = params['name']
    // })
    this.route.data.subscribe(data=> {
      this.userName = data['name']
    })
  }

}
