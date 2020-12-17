import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductlistComponent } from './products/productlist/productlist.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductlistComponent},
  {path: 'product/:id',component: ProductDetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
