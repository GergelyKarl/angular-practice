import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridRoutingModule } from './datagrid-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatagridComponent } from './datagrid/datagrid.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [DatagridComponent],
  imports: [
    CommonModule,
    DatagridRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
})
export class DatagirdModule {}
