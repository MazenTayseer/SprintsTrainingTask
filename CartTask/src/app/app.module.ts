import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './components/category/category.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { BigDisplayComponent } from './layouts/big-display/big-display.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    FooterComponent,
    CategoriesComponent,
    ContactComponent,
    CartComponent,
    BigDisplayComponent,
    ProductComponent,
    ProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
