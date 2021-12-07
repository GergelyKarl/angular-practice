import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatagridComponent } from './datagrid/datagrid.component';

const routes: Routes = [
  {
    path: '',
    component: DatagridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class DatagridRoutingModule {}
