import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      {
        id:1,
        name:"Jordan 4 UNC",
        price:400,
        imageUrl:"/assets/Uncs4.webp",
        size:"9.5 US",
      }
    ];
  }
}
