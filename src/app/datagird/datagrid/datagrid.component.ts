import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GetAPIService} from '../../core/get-api.service';

export interface InputData {
  id: number;
  name: string;
  net: number;

}

@Component({
  selector: 'app-root',
  styleUrls: ['datagrid.component.css'],
  templateUrl: 'datagrid.component.html',
})
export class DatagridComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cbox', 'net', 'vat', 'gr', 'icon'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource;
  productArr!: InputData[];
  myForm!: FormGroup;
  labels = [27, 20, 5];
  actualVat: number = 27;
  isChecked: boolean = false;

  constructor(private fb: FormBuilder, private productsService: GetAPIService) {
    this.dataSource = new MatTableDataSource(this.productArr);
  }

  getAuto(e: any) {
    this.isChecked = e.checked;
  }

  onFormSubmit() {
    if (this.myForm.valid) {
      this.actualVat = this.myForm.value.category;
    } else {
      return;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      category: [27, Validators.required],
    });
    this.productsService.getProducts().subscribe((item) => {
      this.productArr = item;
      this.dataSource = new MatTableDataSource(item);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
