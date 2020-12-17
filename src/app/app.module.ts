import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './products/productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    HomeComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
