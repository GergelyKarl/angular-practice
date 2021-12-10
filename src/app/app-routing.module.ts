import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './store/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'public',
    component: ProductListComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./datagird/datagird.module').then((m) => m.DatagirdModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./store/store.module').then((m) => m.StoreModule),
  }, {

    path: '',
    loadChildren: () =>
      import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./app.module').then((m) => m.AppModule),
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
export class AppRoutingModule {
}
