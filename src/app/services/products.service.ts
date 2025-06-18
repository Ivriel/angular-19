import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Products } from '../interfaces/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl="https://dummyjson.com/products"

  constructor(private http:HttpClient) { }
  productList(): Observable<Products[]> {
    return this.http.get<{products: Products[]}>(this.apiUrl).pipe(
      map(response => response.products) // buat ngambil isi array dari properti "products" sesuai dengan struktur data apinya
    )
  }
}
