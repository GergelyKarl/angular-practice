import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: 'details', children: [{ path: ':id', component: ItemComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
