import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    console.log('Service Called')
   }

   getProductData(){
    return [ 
      {name:'Iphone',category:'mobile',price:20000},
      {name:'Macbook',category:'dekstop',price:120000},
      {name:'Iwatch',category:'watch',price:50000},
    ]
   }
}
