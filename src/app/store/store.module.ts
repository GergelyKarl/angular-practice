import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, CartComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class StoreModule {}
