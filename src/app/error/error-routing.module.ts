import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorpageComponent} from './errorpage/errorpage.component';

const routes: Routes = [
  {
    path:"**",component:ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations:[ErrorpageComponent],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
