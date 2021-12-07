import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsRoutingModule } from './details-routing.module';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ItemComponent],
  imports: [CommonModule, DetailsRoutingModule, ReactiveFormsModule],
})
export class DetailsModule {}
