import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { Products } from '../../interfaces/Products';

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
