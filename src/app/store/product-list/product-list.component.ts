import {Component, OnInit} from '@angular/core';
import {GetAPIService} from '../../core/get-api.service';
import {InputData} from '../../datagird/datagrid/datagrid.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'], providers: [GetAPIService]
})
export class ProductListComponent implements OnInit {
  productArray: InputData[];

  constructor(private getProductsArr: GetAPIService) {
  }

  getArray() {
    this.getProductsArr.getProducts().subscribe((item: InputData[]) => {
      this.productArray = item;
    });
  }

  ngOnInit(): void {
    this.getArray();
  }
}
