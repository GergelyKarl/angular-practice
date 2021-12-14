import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsRoutingModule } from './details-routing.module';
import { ItemComponent } from './item/item.component';
import { getApiService } from '../core/services/api.service';
import { AddItemComponent } from './add-item/add-item.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ItemComponent, AddItemComponent, ItemComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [],
})
export class DetailsModule {}
