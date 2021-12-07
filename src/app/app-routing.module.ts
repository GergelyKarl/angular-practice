import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./datagird/datagird.module').then((m) => m.DatagirdModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
