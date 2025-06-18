import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
interface productModel {
  name:string;
  category:string;
  price:number;
}

@Component({
  selector: 'app-service',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent{
  productData!:productModel[]

  constructor(private productService:ProductService){}
  getData() {
   this.productData= this.productService.getProductData()
  }
}
