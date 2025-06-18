import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

export interface Products {
  id:number;
  title:string;
  description:string;
  category:string;
  price:number;
  discountPercentage:number;
  rating:number;
  stock:number;
  tags:string[];
  brand:string;
  sku:string;
  weight:number;
  dimensions:Dimensions;
  warrantyInformation:string;
  shippingInformation:string;
  availabilityStatus:string;
  reviews:Reviews[];
  returnPolicy:string;
  minimumOrderQuantity:number;
  meta:Meta;
  images:string[];
  thumbnail:string[];
}

export interface Dimensions {
  width:number;
  height:number;
  depth:number
}

export interface Reviews {
  rating:number;
  comment:string;
  date: Date;
  reviewerName:string;
  reviewerEmail:string;
}

export interface Meta {
  createdAt: Date;
  updatedAt: Date;
  barcode:string;
  qrCode:string;
}

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:Products[]=[]

  constructor(private productsService:ProductsService){}
  ngOnInit(): void {
    this.productsService.productList().subscribe((data)=> {
      console.log(data)
      this.products = data
    })
  }

}
