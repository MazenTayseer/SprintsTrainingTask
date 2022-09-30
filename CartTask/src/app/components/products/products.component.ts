import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];
  
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
