import { Injectable } from '@angular/core';
import { Category } from '../interfaces/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  getCategories(): Array<Category> {
    return [
      {
        name: 'Sneakers',
        imageURL: '/assets/test.jpg',
      },
      {
        name: 'Apparel',
        imageURL: '/assets/test.jpg',
      },
    ];
  }
}
