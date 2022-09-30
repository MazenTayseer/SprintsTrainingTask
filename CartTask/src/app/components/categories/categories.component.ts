import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Array<Category> = [];

  constructor(private categoryServive: CategoriesService) {}

  ngOnInit(): void {
    this.categories = this.categoryServive.getCategories();
  }
}
